const getTopPlaylistTrack = () => {
  const getApi = async () => {
    let response = await fetch("/api");
    response = await response.json();
    return response;
  };

  return getApi();
};

export default getTopPlaylistTrack;