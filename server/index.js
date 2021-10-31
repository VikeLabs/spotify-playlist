const express = require("express"); // express module
var request = require("request"); // "Request" library
const yaml = require("js-yaml"); // load secret key from YAML file
const fs = require("fs"); // fs module
var querystring = require("querystring"); // querystring module

// https://www.npmjs.com/package/spotify-web-api-node
const SpotifyWebApi = require("spotify-web-api-node"); // spotify library

app = express();

// listen to port provided by our host if not avaliable listen to localhost 3001
const PORT = process.env.PORT || 3001;

let secretKey;

try {
  let fileContents = fs.readFileSync("./secretKey.yaml", "utf8");
  secretKey = yaml.load(fileContents);
} catch (err) {
  console.log(err);
}

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: secretKey.client_id,
  clientSecret: secretKey.client_secret,
  redirectUri: secretKey.redirect_uri,
});

/* routes */
// sample routes
app.use("/api", require("./routes/hello"));

// redirect to spotify authentication by spotify
app.get("/login", function (req, res) {
  // scope of requests (what info do we need?)
  var scopes = [
    "user-read-playback-state",
    "user-modify-playback-state",
    "user-read-currently-playing",
  ];

  res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

// callback from login
app.get("/callback", async (req, res) => {
  var code = req.query.code || null;
  var error = req.query.error || null;

  // if there is an error in an authentication process
  if (error) {
    console.log("auth error");
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
  console.log("successfully authentication");

  res.redirect("/profile");
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
