// @flow
import * as React from 'react';
import  { Component } from 'react'
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import { Button,Table } from 'react-bootstrap';
import type {ListProps} from  "./Flow-type/type.js"
import {deletePerson,showDelete} from "./Action/action.js"


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
                    <td className="btn_side"><Button variant="danger" onClick={()=>{if(this.props.showDelete){if(this.props.deletePerson){this.props.deletePerson(person.id)}this.props.showDelete()}}}  >Remove</Button></td>
                </tr>
            </tbody>
        </Table>
        </div>
        )
    }):<center><h6>No Person</h6></center>}
        </div>
    )
    }
}


const mapStateToProps = (state ) =>{

  return {              
      people : state.lReducer.people,
  }
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({deletePerson,showDelete},dispatch)
//   { 
//        deletePerson :  (person)=>{dispatch(deletePerson(person))},
//   }
}

export default connect(mapStateToProps,mapDispatchToProps)(List)
