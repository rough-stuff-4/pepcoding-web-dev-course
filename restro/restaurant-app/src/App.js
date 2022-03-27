import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navbar, Nav, Container, Item, NavDropdown } from "react-bootstrap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestauranstList from "./components/RestauranstList";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">Restro</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">
                  <Link to={"/"}>Home</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/list"}>List</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/create"}>Create</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/search"}>Search</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/details"}>Details</Link>
                </Nav.Link>
                <Nav.Link href="#link">
                  <Link to={"/update"}>update</Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Route exact path={"/list"}>
          <RestauranstList />
        </Route>
        <Route exact path={"/create"}>
          <RestaurantCreate />
        </Route>
        <Route exact path={"/search"}>
          <RestaurantSearch />
        </Route>
        <Route exact path={"/update"}>
          <RestaurantUpdate />
        </Route>
        <Route exact path={"/details"}>
          <RestaurantDetail />
        </Route>
        <Route exact path={"/"}>
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
