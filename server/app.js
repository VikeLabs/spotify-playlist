const express = require("express"); // express module
require("dotenv").config(); // load all properties in .env

// https://www.npmjs.com/package/spotify-web-api-node
const SpotifyWebApi = require("spotify-web-api-node"); // spotify library

app = express();

app.use(express.json());

// listen to port provided by our host if not avaliable listen to localhost 3001
const PORT = process.env.PORT || 3001;

/* routes */
// sample routes
app.use("/api", require("./routes/hello"));

// catch a request from front-end
app.post("/userData", async (req, res) => {
  const token = req.body.token;

  let username = "";
  let userid = "";
  const playlistsName = [];
  const playlistTracks = [];

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

  // get playlist tracks
  const getPlayListTracks = async (playlist) => {
    // const data = await spotifyApi.getPlaylistTracks(playlistID, {
    //   offset: 1,
    //   limit: 5,
    //   fields: "items",
    // });
    // console.log("\n + ====== Playlist Tracks Start ===== + \n");
    // for (let track of data.body.items) {
    //   console.log(track.track.name);
    // }
    // console.log("\n + ====== Playlist Tracks End ===== + \n");
    console.log(playlist);
  };

  try {
    const profile = await getProfileID(token);
    userid = profile.body.id;
    username = profile.body.display_name;
    const playlists = await getAllUserPlaylists(userid);
    playlists.map((playlist) => {
      playlistsName.push(playlist.name);
    });
    await getPlayListTracks(playlists);
  } catch (error) {
    console.log("fail to pack user data:", error);
  }

  // return Promise JSon REST API
  res.json({
    type: "user_data",
    username: username,
    id: userid,
    playlists: playlistsName,
  });
}); // end get user data

// invoke out server to listen to a the port
app.listen(PORT, () => {
  console.log("listen to port:", PORT);
});
