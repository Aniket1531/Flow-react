// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
import { Form,Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import type {MyProps, MyState} from "../Flow-type/type.js"
import Modal from "./Modal"


class FormC extends Component<MyProps,MyState> {
  
   state : MyState  = {
        name : ""
      }
   constructor(props : MyProps){
      
    super(props)
    this.handleAdd = this.handleAdd.bind(this)
    
    }


    
    
    handleAdd  : function = (e:SyntheticEvent<EventTarget>)  =>{

    e.preventDefault()
    
    const name = this.state.name
    if(name){
      const  newItem = {id : new Date().getTime().toString(),name}
      this.props.addPerson(newItem)
      // dispatch({type:'ADD_ITEM',payload:newItem})
      this.setState({name : ""})
    }
    else{
      this.props.noValue()
    }
  }
  

  render(): React.Node  {

    return (
      <div>
        <div>
        {this.props.isModalOpen && <Modal/>}
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

const mapStateToProps = (state : MyState) =>{
  
  return {
      isModalOpen : state.isModalOpen,               
  }
}

const mapDispatchToProps = (dispatch) =>{ 
  return{ 
     addPerson : (newItem)=> dispatch({type:'ADD_ITEM',payload:newItem}),
     noValue :  ()=>dispatch({type:'NO_VALUE'}),
    
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(FormC)


// modalContent={this.props.modalContent} variant={this.props.variant} closeModal={this.props.Actioncreator.closeModal}