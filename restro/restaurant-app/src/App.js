import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch , faPlus , faList , faHome , faUser} from "@fortawesome/free-solid-svg-icons";

import { Navbar, Nav, Container, Item, NavDropdown } from "react-bootstrap";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import  NavBarManu from './components/NavBarManu'


import Home from "./components/Home";
import RestaurantUpdate from "./components/RestaurantUpdate";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantSearch from "./components/RestaurantSearch";
import RestauranstList from "./components/RestauranstList";
import Login from "./components/Login";
import Logout from "./components/Logout";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBarManu/>
        <Route exact path={"/list"}>
          <RestauranstList />
        </Route>
        <Route exact path={"/create"}>
          <RestaurantCreate />
        </Route>
        <Route exact path={"/search"}>
          <RestaurantSearch />
        </Route>
        <Route exact path={"/logout"}>
          <Logout />
        </Route>
        <Route exact path={"/update/:id"} render={props=>(
          <RestaurantUpdate {...props}/>
        )}
          >
        </Route>
        <Route exact path={"/login"} render={props=>(
          <Login {...props}/>
        )}
          >
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
