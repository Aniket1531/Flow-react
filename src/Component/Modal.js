// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
import { Alert } from 'react-bootstrap';
import {connect} from "react-redux"
import type {Props,State} from "../Flow-type/type"

// type props = {
//   variant : string,
//   modalContent : string,
//   closeModal : function
// }

export class Modal extends Component<Props> {
  constructor(props : Props)
  {
    super(props)
  }

  componentDidMount(){
    
  setTimeout(()=>{
    this.props.closeModal() 
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



export default Modal
