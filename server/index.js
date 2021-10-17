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

let data;

try {
  let fileContents = fs.readFileSync("./secretKey.yaml", "utf8");
  data = yaml.load(fileContents);
} catch (err) {
  console.log(err);
}

// credentials are optional
var spotifyApi = new SpotifyWebApi({
  clientId: data.client_id,
  clientSecret: data.client_secret,
  redirectUri: data.redirect_uri,
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
app.get("/callback", function (req, res) {
  var code = req.query.code || null;
  var error = req.query.error || null;

  // if there is an error in an authentication process
  if (error) {
    console.log("auth error");
    return;
  }

  // Retrieve an access token and a refresh token
  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      const access_token = data.body.access_token;
      const refresh_token = data.body.refresh_token;

      // Set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(access_token);
      spotifyApi.setRefreshToken(refresh_token);
      console.log("access_token:", access_token);
      console.log("refresh_token:", refresh_token);
    })
    .catch((err) => console.log(err));
  res.send("successfully authentication");
});

// invoke out server to listen to a the port
app.listen(PORT, () => {
  console.log("listen to port:", PORT);
});
