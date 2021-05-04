// @flow
import * as React from 'react';
import  { Component } from 'react'
import {connect} from "react-redux"
import { Button,Table } from 'react-bootstrap';
import type {MyProps,MyState} from  "./Flow-type/type.js"



export class List extends Component<MyProps> {
 
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


const mapStateToProps = (state : MyState) =>{
  
  return {
      isModalOpen : state.isModalOpen,                
      people : state.people,
      modalContent : state.modalContent,
      variant : state.variant

  }
}

const mapDispatchToProps = (dispatch) =>{
  return{ 
       deletePerson :  (person)=>{dispatch({type:"REMOVE_ITEM",payload:person})},
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)
