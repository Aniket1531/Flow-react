// @flow
import  React,{Component} from 'react';
import FormC from "./FormC"
import {connect} from 'react-redux'
import List from './List'

type props = {
    isModalOpen : boolean,
    addPerson : function,
    noValue : function,
    people : Object,
    deletePerson : function,
    modalContent : string,
    variant : string,
    closeModal : function
}

type state = {

  isModalOpen : boolean,
  people : Object
}



class App extends Component<props> {
  render(){
     return (
    
      <section>
        <FormC isModalOpen={this.props.isModalOpen} addPerson={this.props.addPerson} noValue={this.props.noValue} modalContent={this.props. modalContent} variant={this.props.variant} closeModal={this.props.closeModal} />
        <List people ={this.props.people}  deletePerson={this.props.deletePerson}   />
      </section>
    
    )
  }

}

const mapStateToProps = (state) =>{

  return {
      isModalOpen : state.isModalOpen,                
      people : state.people,
      modalContent : state.modalContent,
      variant : state.variant

  }
}

const mapDispatchToProps = (dispatch) =>{

  return {
    addPerson : (newItem)=> dispatch({type:'ADD_ITEM',payload:newItem}),
    noValue : ()=> dispatch({type:'NO_VALUE'}),
    deletePerson : (person)=>{dispatch({type:"REMOVE_ITEM",payload:person})},
    closeModal : ()=> dispatch({type:'CLOSED_MODAL'})
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App)
