const express = require("express"); // express module
var request = require("request"); // "Request" library
const yaml = require("js-yaml"); // load secret key from YAML file
const fs = require("fs"); // fs module
var querystring = require("querystring"); // querystring module

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

var client_id = data.client_id;
var client_secret = data.client_secret;
var redirect_uri = data.redirect_uri;

/* routes */
// sample routes
app.use("/api", require("./routes/hello"));

// link to spotify authentication by spotify
app.get("/login", function (req, res) {
  // scope of requests authorization
  var scope =
    "user-read-playback-state user-modify-playback-state user-read-currently-playing";
  res.redirect(
    "https://accounts.spotify.com/authorize?" +
      querystring.stringify({
        response_type: "code",
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
      })
  );
});

// invoke out server to listen to a the port
app.listen(PORT, () => {
  console.log("listen to port:", PORT);
});
