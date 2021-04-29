// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
// import {connect} from "react-redux"
import { Button,Table } from 'react-bootstrap';
// import {useSelector,useDispatch} from "react-redux"
import type {Props} from  "./Flow-type/type"

// type props = {
//    people :Object,
//   deletePerson :function
// }



export class List extends Component<Props> {
    
    render(): React.Node {
        return (
        <div>
        {this.props.people.map((person : Object)=>{
        return(
        <div key={person.id } className="item" >
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td><h5>{person.name}</h5></td>
                    <td><Button variant="danger" onClick={()=>this.props.deletePerson(person.id)}  >Remove</Button></td>
                </tr>
            </tbody>
        </Table>
        </div>
    )
    })}
        </div>
    )
    }
}
export default List
