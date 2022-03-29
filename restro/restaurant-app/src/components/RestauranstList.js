import React, { Component } from 'react';
import { Table , Container} from 'react-bootstrap';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEdit , faTrash} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class RestauranstList extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }
    componentDidMount(){
      this.getData();
    }

    getData(){
        fetch("http://localhost:3004/restaurant").then((response)=>{
            response.json().then((result)=>{
                // console.warn(result);
                this.setState({list:result});
            })
        })
    }

    delete (id){
        // alert("Deleted " + id);
        fetch('http://localhost:3004/restaurant/' + id , {
            method: "DELETE",
        }).then((result)=>{
            result.json().then((resp)=>{
                // alert("restaurant has been deleted");
                this.getData();
            })
        })
    }

    render() {
        {console.log("rendereing RestauranstList")}
        {console.log("list : " , this.state.list)}
        return (
            <Container>
                <h1>RestauranstList</h1>
                {
                    this.state.list ?
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
                        {
                            this.state.list.map((item , i)=>
                                <tr>
                                   <td>{item.id}</td> 
                                   <td>{item.name}</td> 
                                   <td>{item.rating}</td> 
                                   <td>{item.address}</td> 
                                   <td> <Link to={"/update/"+item.id}><FontAwesomeIcon icon={faEdit}/> </Link> 
                                   <FontAwesomeIcon onClick={()=>{this.delete(item.id)}} icon={faTrash} color="red"/></td>
                                </tr>
                            )
                        }
                        </tbody>
                        </Table>
                    </div>
                    : <p>Please wait .... </p>
                }
            </Container>
        );
    }
}

export default RestauranstList;