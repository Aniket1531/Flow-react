// @flow
import * as React from 'react';
import  { Component } from 'react'
import type {Node} from 'react';
import  FormC from "./FormC"
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import type {MyProps,MyState} from "../Flow-type/type.js"
import {AddItem,NoValue,RemoveItem,CloseModal} from "../Action/action"
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
    console.log("props",props)
    console.log("Actions",{AddItem,NoValue,RemoveItem,CloseModal})
    // const {dispatch} =props
    // this.bindActionCreators = this.bindActionCreators(Actions,dispatch)

     
  }
  
  render(): React.Node{
   
     return (
    
      <section>
        <FormC isModalOpen={this.props.isModalOpen} modalContent={this.props. modalContent} variant={this.props.variant}  Actioncreator={this.props.Actioncreator} /> 
        <List people ={this.props.people}  Actioncreator={this.props.Actioncreator} />
      </section>
    
     )
  }

}
{/* isModalOpen={this.props.isModalOpen} addPerson={this.props.addPerson} noValue={this.props.noValue} modalContent={this.props. modalContent} variant={this.props.variant} closeModal={this.props.closeModal} /> */}
{/* people ={this.props.people}  deletePerson={this.props.deletePerson}/> */}
const mapStateToProps = (state : MyState) =>{
  
  return {
      isModalOpen : state.isModalOpen,                
      people : state.people,
      modalContent : state.modalContent,
      variant : state.variant

  }
}

const mapDispatchToProps = (dispatch) =>{
   
  return{ 
      // addPerson : bindActionCreators(AddItem,dispatch),
      // novalue : bindActionCreators(NoValue,dispatch),
      // deletePerson :bindActionCreators(RemoveItem,dispatch),
      // closeModal : bindActionCreators(CloseModal,dispatch)

    Actioncreator : bindActionCreators({AddItem,NoValue,RemoveItem,CloseModal}, dispatch)

    //   addPerson : (newItem)=> dispatch({type:'ADD_ITEM',payload:newItem}),
    // noValue :  ()=>dispatch({type:'NO_VALUE'}),
    // deletePerson :  (person)=>{dispatch({type:"REMOVE_ITEM",payload:person})},
    // closeModal : ()=> dispatch({type:'CLOSED_MODAL'})
  }


}

export default connect(mapStateToProps,mapDispatchToProps)(App)
