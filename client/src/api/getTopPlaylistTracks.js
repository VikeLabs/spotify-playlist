const getTopPlaylistTracks = () => {
  const getApi = async () => {
    let response = await fetch("/api");
    try {
      response = await response.json();
    } catch (err) {
      console.log("getTopPlaylistTracks: ", err);
    }
    return response;
  };

  return getApi();
};

export default getTopPlaylistTracks;
