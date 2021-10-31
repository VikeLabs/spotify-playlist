const express = require("express"); // express module
require("dotenv").config(); // load all properties in .env

// https://www.npmjs.com/package/spotify-web-api-node
const SpotifyWebApi = require("spotify-web-api-node"); // spotify library

app = express();

// listen to port provided by our host if not avaliable listen to localhost 3001
const PORT = process.env.PORT || 3001;

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.SECRET_KEY,
  redirectUri: process.env.REDIRECT_URL,
});

// scope of requests (what info do we need?)
var scopes = [
  "ugc-image-upload",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "app-remote-control",
  "user-read-email",
  "user-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-read-private",
  "playlist-modify-private",
  "user-library-modify",
  "user-library-read",
  "user-top-read",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-follow-read",
  "user-follow-modify",
];

/* routes */
// sample routes
app.use("/api", require("./routes/hello"));

// redirect to spotify authentication by spotify
app.get("/login", function (req, res) {
  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

// callback from login
app.get("/callback", async (req, res) => {
  var code = req.query.code || null;
  var error = req.query.error || null;
  const state = req.query.state || null;

  // if there is an error in an authentication process
  if (error) {
    console.log("auth error");
    res.send(`Callback Error: ${error}`);
    return;
  }

  // Retrieve an access token and a refresh token
  const token = await spotifyApi.authorizationCodeGrant(code);

  // reassing token
  const access_token = token.body["access_token"];
  const refresh_token = token.body["refresh_token"];

  // // Set the access token on the API object to use it in later calls
  spotifyApi.setAccessToken(access_token);
  spotifyApi.setRefreshToken(refresh_token);
  res.redirect(`/profile/${access_token}`);
});

// get user profile
app.get("/profile", async (req, res) => {
  // use Access token (when we move to anoter file)
  const access_token = spotifyApi.getAccessToken();
  const refresh_token = spotifyApi.getRefreshToken();

  try {
    const profile = await spotifyApi.getMe();
    const userId = profile.body.id;
    console.log(profile.body);
    getUserPlaylists(userId);
  } catch (e) {
    console.log("profile page error:", e);
  }

  res.send("Profile page");
});

// invoke out server to listen to a the port
app.listen(PORT, () => {
  console.log("listen to port:", PORT);
});

// we will move them to another file later
const getUserPlaylists = async (UID) => {
  try {
    // Get a user's playlists
    const data = await spotifyApi.getUserPlaylists(UID);
    const playlistID = [];
    const playlistName = [];

    console.log("\n + ====== Playlists Start ===== + \n");
    for (let playlist of data.body.items) {
      playlistID.push(playlist.id);
      playlistName.push(playlist.name);
      console.log("Playlist name:", playlist.name, "Playlist id:", playlist.id);
    }
    console.log("\n + ====== Playlists End ===== + \n");
    await getUserPlaylistTracks(
      playlistName[playlistName.length - 1],
      playlistID[playlistID.length - 1]
    );
  } catch (e) {
    console.log("error on getUserPlaylists" + e);
  }
};

const getUserPlaylistTracks = async (playlistName, playlistID) => {
  const data = await spotifyApi.getPlaylistTracks(playlistID, {
    offset: 1,
    limit: 5,
    fields: "items",
  });
  console.log("\n + ====== Playlist Tracks Start ===== + \n");
  for (let track of data.body.items) {
    console.log(track.track.name);
  }
  console.log("\n + ====== Playlist Tracks End ===== + \n");
};
