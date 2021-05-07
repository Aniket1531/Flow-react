// @flow
import * as React from 'react';
import  { Component } from 'react'
import { Form,Button } from 'react-bootstrap';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import type {FormProps,FormState} from "../Flow-type/type.js"
import Modal from "./Modal"
import {addPerson,noValue,addName,showAdd,showNothing} from "../Action/action"


class FormC extends Component<FormProps,FormState> {
    handleAdd  : function = (e:SyntheticEvent<EventTarget>)  =>{
      e.preventDefault()
    
      const name = this.props.name
      if(name){
         const  newItem = {id : new Date().getTime().toString(),name}
         if(this.props.showAdd){ 
            if(this.props.addPerson ){
              this.props.addPerson(newItem)
              if(this.props.addName){
                  this.props.addName("")
                }
              }
              this.props.showAdd()
          }
        }
      else{
         if(this.props.showNothing){
           if(this.props.noValue){
             this.props.noValue()
             }
             this.props.showNothing()
          }
     }
  }

handleName : function = (e: SyntheticEvent<> & {target: window.HTMLInputElement})  =>{
    e.preventDefault()
    if(this.props.addName)
    {
      this.props.addName((e.target: window.HTMLInputElement).value)
    }
  }

  render(): React.Node  {
    return (
      <div>
        <div>
        <Modal/>
        <Form onSubmit={this.handleAdd} > 
        <Form.Group controlId="formBasicEmail">
        <Form.Control  placeholder="Add Name" value={this.props.name} onChange={this.handleName} />
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

const mapStateToProps = (state ) =>{
  return {              
      name : state.fReducer.name,
  }
}


const mapDispatchToProps = (dispatch) =>{ 
  return bindActionCreators({addPerson,noValue,addName,showAdd,showNothing},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FormC)