const express = require("express"); // express module
require("dotenv").config(); // load all properties in .env

// https://www.npmjs.com/package/spotify-web-api-node
const SpotifyWebApi = require("spotify-web-api-node"); // spotify library

app = express();

app.use(express.json());

// listen to port provided by our host if not avaliable listen to localhost 3001
const PORT = process.env.PORT || 3001;

// credentials are optional
var tempSpotifyApi = new SpotifyWebApi({
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
  res.redirect(tempSpotifyApi.createAuthorizeURL(scopes));
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
  const token = await tempSpotifyApi.authorizationCodeGrant(code);

  // reassing token
  const access_token = token.body["access_token"];
  const refresh_token = token.body["refresh_token"];

  // // Set the access token on the API object to use it in later calls
  tempSpotifyApii.setAccessToken(access_token);
  tempSpotifyApi.setRefreshToken(refresh_token);
  res.redirect(`/profile/${access_token}`);
});

// get user profile
app.use("/profile", require("./routes/profile"));

// playlistTrack
app.post("/playlistTrack", async (req, res) => {
  const token = req.body.token;
  console.log(token);

  let username = "";
  let userid = "";
  const playlistsName = [];

  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(token);

  // get user profile
  const getProfileID = async () => {
    try {
      const profile = await spotifyApi.getMe();
      return profile;
    } catch (error) {
      console.log("profile:", error);
    }
  };

  // get user playlists
  const getAllUserPlaylists = async (UID) => {
    try {
      const playlists = await spotifyApi.getUserPlaylists(UID);
      return playlists.body.items;
    } catch (error) {
      console.log("playlists:", error);
    }
  };

  try {
    const profile = await getProfileID(token);
    userid = profile.body.id;
    username = profile.body.display_name;
    const playlists = await getAllUserPlaylists(userid);
    playlists.map((playlist) => {
      playlistsName.push(playlist.name);
    });
  } catch (error) {
    console.log("playlistTrack:", error);
  }

  // return Promise JSon REST API
  res.json({
    type: "playlists",
    username: username,
    id: userid,
    playlists: playlistsName,
  });
}); // end playlist tract

// invoke out server to listen to a the port
app.listen(PORT, () => {
  console.log("listen to port:", PORT);
});
