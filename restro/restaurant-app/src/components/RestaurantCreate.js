import React, { Component } from "react";

class RestaurantCreate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
    };
  }
  create() {
    console.log("state : ", this.state);
    fetch("http://localhost:3004/restaurant", {
      method: "Post",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(this.state),
    }).then((result) => {
      result.json().then((resp) => {
        console.log("res.json ", resp);
        // this.setState({list:result});
      });
    });
  }
  render() {
    return (
      <div>
        <h1> Restaurant Create </h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurant Name"
          ></input>
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            placeholder="Restaurant Email"
          ></input>
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
            placeholder="Restaurant Rating"
          ></input>
          <br />
          <input
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            placeholder="Restaurant Address"
          ></input>
          <br />
          <br />
          <button onClick={() => this.create()}> Add Restaurant</button>
        </div>
      </div>
    );
  }
}

export default RestaurantCreate;
