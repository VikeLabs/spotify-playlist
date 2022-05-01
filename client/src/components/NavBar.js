import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import React from "react";
import { useAuthToken } from "../util/useAuthToken";

const NavBar = () => {
  const authToken = useAuthToken();
  const loginHandler = (e) => {
    e.preventDefault();
    authToken.login();
  };
  const logoutHandler = (e) => {
    authToken.logout();
  };

  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as: Poomon001</Navbar.Text>
          <button onClick={loginHandler}>Login</button>
          <button onClick={logoutHandler}>Logout</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
