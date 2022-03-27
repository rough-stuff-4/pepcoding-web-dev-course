import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

class RestauranstList extends Component {
    constructor(){
        super();
        this.state = {
            list:null,
        }
    }
    componentDidMount(){
        fetch("http://localhost:3005/restaurant").then((response)=>{
            response.json().then((result)=>{
                // console.warn(result);
                this.setState({list:result});
            })
        })
    }
    render() {
        {console.log("rendereing RestauranstList")}
        {console.log("list : " , this.state.list)}
        return (
            <div>
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
                                </tr>
                            )
                        }
                        </tbody>
                        </Table>
                    </div>
                    : <p>Please wait .... </p>
                }
            </div>
        );
    }
}

export default RestauranstList;