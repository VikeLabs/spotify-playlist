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

app.get("/profile", (req, res) => {
  // use Access token
  const access_token = spotifyApi.getAccessToken();
  const refresh_token = spotifyApi.getRefreshToken();
  res.send("Profile page");
});

// invoke out server to listen to a the port
app.listen(PORT, () => {
  console.log("listen to port:", PORT);
});
