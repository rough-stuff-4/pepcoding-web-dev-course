import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      password: "",
      r: "rough",
    };
  }

  login() {
    console.log(this.state);
    fetch("http://localhost:3004/login?q=" + this.state.name).then((data) => {
      data.json().then((resp) => {
        localStorage.setItem('login' , JSON.stringify(resp))
        console.warn("resp of login : ", resp);
        if(resp.length > 0){
          this.props.history.push('list');
        } else {
          alert ("Please check username and password");
        }
      });
    });
  }
  render() {
    return (
      <div>
        <input
          name="user"
          type="text"
          onChange={(event) => {
            this.setState({ name: event.target.value });
          }}
          placeholder="enter name"
        />{" "}
        <br /> <br />
        <input
          name="user"
          type="text"
          onChange={(event) => {
            this.setState({ password: event.target.value });
          }}
          placeholder="enter password"
        />{" "}
        <br /> <br />
        <button
          onClick={() => {
            this.login();
          }}
        >
          Login
        </button>
      </div>
    );
  }
}

export default Login;
