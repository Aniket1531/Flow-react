// @flow
import * as React from 'react';
import  { Component } from 'react'
import  FormC from "./FormC"
// import {connect} from 'react-redux'
// import { bindActionCreators } from 'redux'
// import type {MyProps} from "../Flow-type/type.js"
// import {addPerson,noValue,deletePerson,closeModal} from "../Action/action"
import List from '../List'


class App extends Component<{}> {
  
  render(): React.Node{
   
     return (
      <section>
        <FormC/> 
        <List />
      </section>
    
     )
  }

}
export default App
