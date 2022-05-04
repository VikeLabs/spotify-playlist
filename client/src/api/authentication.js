import React from "react";
import credential from "../util/credential";
import scope from "../util/scope";

const authentication = () => {
  const clientId = credential.clientId;
  const redirectUri = credential.redirectUri;
  const responseType = "token";
  const endpoint = "https://accounts.spotify.com/authorize";

  window.location.href = `${endpoint}?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=${responseType}`;

  return null;
};

export default authentication;
