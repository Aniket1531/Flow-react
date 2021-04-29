// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
import  FormC from "./FormC"
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import type {Props,State} from "../Flow-type/type"
import {AddItem,NoValue,RemoveItem,CloseModal} from "../Action/action"
import List from '../List'


class App extends Component<Props> {
  constructor(props: Props) {
    super(props)
  }
  render(): React.Node{
     return (
    
      <section>
        <FormC isModalOpen={this.props.isModalOpen} addPerson={this.props.addPerson} noValue={this.props.noValue} modalContent={this.props. modalContent} variant={this.props.variant} closeModal={this.props.closeModal} />
        <List people ={this.props.people}  deletePerson={this.props.deletePerson}/>
      </section>
    
     )
  }

}

const mapStateToProps = (state : State) =>{
  return {
      isModalOpen : state.isModalOpen,                
      people : state.people,
      modalContent : state.modalContent,
      variant : state.variant

  }
}

const mapDispatchToProps = (dispatch) =>{

  return {
    addPerson : bindActionCreators(AddItem,dispatch),
    noValue : bindActionCreators(NoValue,dispatch),
    deletePerson : bindActionCreators(RemoveItem,dispatch),
    closeModal : bindActionCreators(CloseModal,dispatch)
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App)
