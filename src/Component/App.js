// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
import  FormC from "./FormC"
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import type {MyProps,MyState} from "../Flow-type/type.js"
import * as Action from "../Action/action"
import List from '../List'

// type Props = {
    
//     isModalOpen : boolean ,
//     addPerson : any,
//     noValue : any,
//     people : Array<Object>,
//     deletePerson : any,
//     modalContent : string,
//     variant : string,
//     closeModal : any
// }
 //{AddItem,NoValue,RemoveItem,CloseModal}
// type State = {

//   isModalOpen: boolean,
//   people : Array<Object>,
//   modalContent : string,
//   variant : string,
//   name :string
// }

class App extends Component<MyProps> {

  
  constructor(props: MyProps) {
   
    super(props)
    // const {dispatch} =props
    // this.bondActions = this.bindActionCreators(Action,dispatch)

     
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

const mapStateToProps = (state : MyState) =>{
  
  return {
      isModalOpen : state.isModalOpen,                
      people : state.people,
      modalContent : state.modalContent,
      variant : state.variant

  }
}

const mapDispatchToProps = (dispatch) =>{

  return {
    addPerson :   (newItem)=> dispatch({type:'ADD_ITEM',payload:newItem}),
    noValue :  ()=>dispatch({type:'NO_VALUE'}),
    deletePerson :  (person)=>{dispatch({type:"REMOVE_ITEM",payload:person})},
    closeModal : ()=> dispatch({type:'CLOSED_MODAL'})
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(App)
