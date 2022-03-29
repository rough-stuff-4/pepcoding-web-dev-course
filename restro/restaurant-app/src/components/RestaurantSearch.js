import React, { Component } from "react";
import { Form, Table  ,  Container} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class RestaurantSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchData: null,
      noData: false,
      lastSearch:""
    };
  }

  search(key) {
    // console.warn(key);
    console.log(this.state);
    this.setState({lastSearch: key});
    console.log(this.state);
    fetch("http://localhost:3004/restaurant?q=" + key).then((data) => {
      data.json().then((resp) => {
        console.warn("resp : ", resp);
        if (resp.length > 0) {
          this.setState({ searchData: resp });
          this.setState({ noData: false });
        } else {
          this.setState({ noData: true });
          this.setState({ searchData: null });
        }
      });
    });
  }

  delete(id) {
    // alert("Deleted " + id);
    fetch("http://localhost:3004/restaurant/" + id, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        // alert("restaurant has been deleted");
        this.search(this.state.lastSearch);
      });
    });
  }

  render() {
    return (
      <Container>
        <h1>RestaurantSearch </h1>

        <Form.Control type="text" placeholder="password"  onChange={(e) => {
            this.search(e.target.value);
          }}></Form.Control>

        <div>
          {this.state.searchData ? (
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Location</th>
                    <th>Operations</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.searchData.map((item) => (
                    <tr>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td>{item.rating}</td>
                      <td>{item.address}</td>
                      <td>
                        {" "}
                        <Link to={"/update/" + item.id}>
                          <FontAwesomeIcon icon={faEdit} />{" "}
                        </Link>
                        <FontAwesomeIcon
                          onClick={() => {
                            this.delete(item.id);
                          }}
                          icon={faTrash}
                          color="red"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          ) : (
            " "
          )}
          {this.state.noData ? <h3> No Data Found</h3> : ""}
        </div>
      </Container>
    );
  }
}

export default RestaurantSearch;
