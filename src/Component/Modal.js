// @flow
import * as React from 'react';
import  { Component } from 'react'
import { Alert } from 'react-bootstrap';
import {connect} from "react-redux"
import { bindActionCreators } from 'redux'
import type {ModalProps} from "../Flow-type/type.js"
import {closeModal} from "../Action/action"


export class Modal extends Component<ModalProps> {

  componentDidMount(){
    
  setTimeout(()=>{
    console.log("called0110")
    if(this.props.closeModal)
    {
      this.props.closeModal()
    }
  }
  ,3000)

  }


  render(): React.Node {
    console.log(this.props.isModalOpen)
    return (
        <div className={this.props.isModalOpen?'show':'hide'} >
            <Alert variant={this.props.variant}>
                <center>
                    <h6>{this.props.modalContent} </h6>
            </center>
      </Alert>
        </div>
    )
    
  }
}

const mapStateToProps = (state) =>{
  
  return {
      modalContent : state.fReducer.modalContent,
      variant : state.fReducer.variant,
      isModalOpen : state.mReducer.isModalOpen
      
  }
}

const mapDispatchToProps = (dispatch) =>{
   
  return bindActionCreators({closeModal},dispatch)
  //     closeModal : ()=> dispatch(closeModal())
  // }
}

export default connect(mapStateToProps,mapDispatchToProps)(Modal)
