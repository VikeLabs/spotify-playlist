const getPlaylist = async (token) => {
  let response = await fetch("/playlistTrack", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  });
  try {
    response = await response.json();
    return response.info;
  } catch (error) {
    console.log("getPlaylist:", error);
    return error;
  }
};

export default getPlaylist;
