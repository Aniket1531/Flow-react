// @flow
import * as React from 'react';
import  { Component } from 'react'
import { Form,Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import type {FormProps,FormState} from "../Flow-type/type.js"
import Modal from "./Modal"
import {addPerson,noValue} from "../Action/action"


class FormC extends Component<FormProps,FormState> {
  
   state : FormState  = {
        name : ""
      }
    
  
    handleAdd  : function = (e:SyntheticEvent<EventTarget>)  =>{

    e.preventDefault()
    
    const name = this.state.name
    if(name){
      const  newItem = {id : new Date().getTime().toString(),name}
      if(this.props.addPerson)
      {
        this.props.addPerson(newItem)
      }
      // dispatch({type:'ADD_ITEM',payload:newItem})
      this.setState({name : ""})
    }
    else{
      if(this.props.noValue)
      {
        this.props.noValue()
      }
    }
  }
  

  render(): React.Node  {

    return (
      <div>
        <div>
        <Modal/>
        <Form onSubmit={this.handleAdd} > 
        <Form.Group controlId="formBasicEmail">
        {/* <Form.Label>Name</Form.Label> */}
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


const mapDispatchToProps = (dispatch) =>{ 
  return bindActionCreators({addPerson,noValue},dispatch)
    //  addPerson : (newItem)=> dispatch(addPerson(newItem)),
    //  noValue :  ()=>dispatch(noValue()),
  
}



export default connect(null,mapDispatchToProps)(FormC)


// modalContent={this.props.modalContent} variant={this.props.variant} closeModal={this.props.Actioncreator.closeModal}