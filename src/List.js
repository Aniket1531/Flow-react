// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
import {connect} from "react-redux"
import { Button,Table } from 'react-bootstrap';
// import {useSelector,useDispatch} from "react-redux"
import type {MyProps,MyState} from  "./Flow-type/type.js"





export class List extends Component<MyProps> {

     constructor(props : MyProps){
    super(props)
    
    }
    
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
