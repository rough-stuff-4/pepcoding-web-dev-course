import React, { Component } from "react";

class RestaurantUpdate extends Component {
  constructor() {
    super();
    this.state = {
      name: null,
      email: null,
      address: null,
      rating: null,
      id: null
    };
  }

  componentDidMount() {
    fetch(
      "http://localhost:3004/restaurant/" + this.props.match.params.id ,
    ).then((response) => {
      console.log("response  : ", response);

      response.json().then((result) => {
        // this.setState({list:result});
        console.log("result : ", result);
        this.setState({...result});
      });
    });
  }

  update(){
    fetch(
        "http://localhost:3004/restaurant/" + this.state.id , {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
      ).then((result) => {
        console.log("response  : ", result);
  
        result.json().then((resp) => {
          // this.setState({list:result});
          console.log("result : ", resp);
          alert("Restaurant has been updated")
          this.setState({...resp});
        });
      });
  }

  render() {
    {console.log("this.state of restUpdate" ,this.state)}

    // console.log( "this.props : ", this.props);
    return (
      <div>
        <h1>RestaurantUpdate</h1>
        <div>
          <input
            onChange={(event) => {
              this.setState({ name: event.target.value });
            }}
            placeholder="Restaurant Name"  value={this.state.name}
          ></input>
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
            placeholder="Restaurant Email" value={this.state.email}
          ></input>
          <br />
          <br />
          <input
            onChange={(event) => {
              this.setState({ rating: event.target.value });
            }}
            placeholder="Restaurant Rating" value={this.state.rating}
          ></input>
          <br />
          <input
            onChange={(event) => {
              this.setState({ address: event.target.value });
            }}
            placeholder="Restaurant Address" value={this.state.address}
          ></input>
          <br />
          <br />
          <button onClick={() => this.update()}> Update Restaurant</button>
        </div>
      </div>
    );
  }
}

export default RestaurantUpdate;
