const getPlaylist = async (token) => {
  let response = await fetch("/playlistTrack", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token: token }),
  });
  try {
    response = await response.json();
    console.log(response);
    return response;
  } catch (error) {
    response = "";
    console.log("getPlaylist:", error);
    return error;
  }
};

export default getPlaylist;
