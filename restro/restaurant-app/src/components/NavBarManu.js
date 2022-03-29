import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faPlus,
  faList,
  faHome,
  faUser,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

import { Navbar, Nav, Container, Item, NavDropdown } from "react-bootstrap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class NavBarManu extends Component {
  render() {
    return (
      <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Restro</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to={"/"}>
                    {" "}
                    <FontAwesomeIcon icon={faHome} /> Home{" "}
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/list"}>
                    {" "}
                    <FontAwesomeIcon icon={faList} /> List
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/create"}>
                    {" "}
                    <FontAwesomeIcon icon={faPlus} /> Create
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/search"}>
                    {" "}
                    <FontAwesomeIcon icon={faSearch} /> Search
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/details"}>
                    {" "}
                    <FontAwesomeIcon icon={faList} /> Details
                  </Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/update"}>
                    {" "}
                    <FontAwesomeIcon icon={faList} />
                    update
                  </Link>
                </Nav.Link>

                {localStorage.getItem("login") ? (
                  <Nav.Link href="#link">
                    <Link to={"/logout"}>
                      {" "}
                      <FontAwesomeIcon icon={faSignOutAlt} />
                      Log Out
                    </Link>
                  </Nav.Link>
                ) : (
                  <Nav.Link href="#link">
                    <Link to={"/login"}>
                      {" "}
                      <FontAwesomeIcon icon={faUser} />
                      Login
                    </Link>
                  </Nav.Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NavBarManu;
