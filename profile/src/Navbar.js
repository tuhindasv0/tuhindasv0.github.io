import React from "react";
import "./Navbar.css";
import icon from "./resources/img/icon.png";
import "./resources/css/Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";

const Navigation = (props) => {
  console.log(props);
  return (
    <Navbar className="Header" bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        {" "}
        <img className="HeaderIcon" src={icon} alt="profile Icon"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto IconLink">
          <Nav.Link href="/">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
