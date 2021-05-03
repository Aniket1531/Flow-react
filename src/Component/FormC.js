// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
import { Form,Button } from 'react-bootstrap';
// import {useSelector,useDispatch} from "react-redux"
import type {MyProps, MyState} from "../Flow-type/type.js"
import Modal from "./Modal"

// type Props = {
//      isModalOpen : boolean,
//     addPerson : function,
//     noValue : function,
//     variant : string,
//   modalContent : string,
//   closeModal : function
//     // people : Array<{}>,
//     // deletePerson : function
// }

// type State = {
//   name : string,

// }


class FormC extends Component<MyProps,MyState> {
  
   state : MyState  = {
        name : ""
      }
   constructor(props : MyProps){
      
    super(props)
    console.log("form",this.props)
    this.handleAdd = this.handleAdd.bind(this)
    }


    
    
    handleAdd  : function = (e:SyntheticEvent<EventTarget>)  =>{

    e.preventDefault()
    
    const name = this.state.name
    if(name){
      const  newItem = {id : new Date().getTime().toString(),name}
      this.props.Actioncreator.addPerson(newItem)
      // dispatch({type:'ADD_ITEM',payload:newItem})
      this.setState({name : ""})
    }
    else{
      // console.log("this.props.Actioncreator",this.props.Actioncreator.noValue)
      this.props.Actioncreator.noValue()
    }
  }
  

  render(): React.Node  {

    return (
      <div>
        <div>
        {this.props.isModalOpen && <Modal modalContent={this.props.modalContent} variant={this.props.variant} closeModal={this.props.closeModal} />}
        <Form onSubmit={this.handleAdd} > 
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control  placeholder="Add Name" value={this.state.name} onChange={(e :SyntheticInputEvent<HTMLInputElement>)=>{this.setState({name : e.target.value})}} />
        </Form.Group>
        <Button variant="primary" type="submit">
        Add People
        </Button>
        </Form>
        
        </div>
      </div>
    )
  }
}


export default FormC
