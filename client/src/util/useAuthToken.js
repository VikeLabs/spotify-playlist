import React from "react";
import { createContext, useState, useContext, useEffect, memo } from "react";
import authentication from "../api/authentication";

// create context
const AuthTokenContext = createContext(null);

// provide context
const AuthTokenProvider = (props) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = window.location.hash;
    // let token = window.localStorage.getItem("token");
    let token = "";
    if (!token && hash) {
      token = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"))
        .split("=")[1];
    }
    if (token) {
      //   window.localStorage.setItem("token", token);
      setToken(token);
    }
  }, []);

  const login = () => {
    authentication();
  };

  const logout = () => {
    // window.localStorage.removeItem("token", token);
    setToken("");
    window.location.href = "http://localhost:3000/";
  };

  return (
    <AuthTokenContext.Provider value={{ token, login, logout }}>
      {props.children}
    </AuthTokenContext.Provider>
  );
};

// consume context
export const useAuthToken = () => {
  return useContext(AuthTokenContext);
};

export default memo(AuthTokenProvider);
