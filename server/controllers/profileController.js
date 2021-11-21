// https://www.npmjs.com/package/spotify-web-api-node
const SpotifyWebApi = require("spotify-web-api-node");
const spotifyApi = new SpotifyWebApi();

const profile = async (req, res) => {
  const token = req.params.tokenCode;
  spotifyApi.setAccessToken(token);

  try {
    const profile = await spotifyApi.getMe();
    console.log(profile.body);
    await getAllUserPlaylists(profile.body.id);
  } catch (e) {
    console.log("profile page error:", e);
  }

  const data = ["poomon ", "hello ", "world."];
};

// we will move them to another file later
const getAllUserPlaylists = async (UID) => {
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

module.exports = {
  profile: profile,
};
