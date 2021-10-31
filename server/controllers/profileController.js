// https://www.npmjs.com/package/spotify-web-api-node
const SpotifyWebApi = require("spotify-web-api-node");

const profile = async (req, res) => {
  const token = req.params.code;
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(token);

  try {
    const profile = await spotifyApi.getMe();
    console.log(profile.body);
  } catch (e) {
    console.log("profile page error:", e);
  }

  res.send("Profile page");
};

module.exports = {
  profile: profile,
};
