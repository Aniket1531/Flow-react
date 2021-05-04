// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
import { Alert } from 'react-bootstrap';
import {connect} from "react-redux"
import type {MyProps,MyState} from "../Flow-type/type.js"


export class Modal extends Component<MyProps> {
  

  constructor(props : MyProps)
  {
    super(props)
  }


  componentDidMount(){
    
  setTimeout(()=>{
    if(this.props.closeModal)
    {
      this.props.closeModal()
    }
  }
  ,3000)

  }
  render(): React.Node {
    return (
        <div>
            <Alert variant={this.props.variant}>
                <center>
                    <h6>{this.props.modalContent} </h6>
            </center>
      </Alert>
        </div>
    )
  }
}

const mapStateToProps = (state : MyState) =>{
  
  return {
      modalContent : state.modalContent,
      variant : state.variant
  }
}

const mapDispatchToProps = (dispatch) =>{
   
  return{ 
      closeModal : ()=> dispatch({type:'CLOSED_MODAL'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)
