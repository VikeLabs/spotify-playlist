import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import React, { useState } from "react";
import login from "../Apis/login";

const NavBar = () => {
  const loginHandler = (e) => {
    e.preventDefault();
    login();
  };
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>Signed in as: Poomon001</Navbar.Text>
          <button onClick={loginHandler}>Login</button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
