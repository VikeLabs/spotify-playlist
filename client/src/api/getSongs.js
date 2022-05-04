const getSongs = async (token) => {
  let response = await fetch("/songs", {
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
    console.log("getSongs:", error);
    return error;
  }
};

export default getSongs;
