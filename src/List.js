// @flow
import * as React from 'react';
import  { Component } from 'react'
import {connect} from "react-redux"
import { Button,Table } from 'react-bootstrap';
import type {ListProps} from  "./Flow-type/type.js"
import {deletePerson} from "./Action/action.js"


export class List extends Component<ListProps> {
 
    render(): React.Node {
        
        return (
        <div style={{margin: "15px"}}>
        {this.props.people ? this.props.people.map((person)=>{
        return(
        <div key={person.id } className="item" >
        <Table striped bordered hover>
            <tbody>
                <tr>
                    <td><h5>{person.name}</h5></td>
                    <td className="btn_side"><Button variant="danger" onClick={()=>{if(this.props.deletePerson){this.props.deletePerson(person.id)}}}  >Remove</Button></td>
                </tr>
            </tbody>
        </Table>
        </div>
        )
    }):<p>No Person</p>}
        </div>
    )
    }
}


const mapStateToProps = (state ) =>{
  
  return {              
      people : state.people,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{ 
       deletePerson :  (person)=>{dispatch(deletePerson(person))},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)
