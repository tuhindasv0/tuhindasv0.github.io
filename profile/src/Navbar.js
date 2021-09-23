import React from "react";
import "./Navbar.css";
import icon from "./resources/img/icon.png";
import "./resources/css/Header.css";
import { Navbar, Nav } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import { HashRouter, Route, Link } from "react-router-dom";

import Certificates from "./components/Certificates";
import Home from "./Homepage";
const Navigation = (props) => {
  console.log(props);
  return (
    <HashRouter  basename="/">
    <Navbar className="Header" bg="primary" variant="dark">
      <Navbar.Brand href="#">
        {" "}
        <img className="HeaderIcon" src={icon} alt="profile Icon"></img>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto IconLink">
        <Link className="LinkText" to="/">Home</Link>
          
          <Link className="LinkText" to="/certifications">Certifications</Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    <Route exact path="/" component={Home} />
    <Route path="/certifications" component={Certificates} />
    </HashRouter>
  );
};

export default withRouter(Navigation);
