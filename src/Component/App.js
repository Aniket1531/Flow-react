// @flow
import * as React from 'react';
import  { Component } from 'react'
import  FormC from "./FormC"
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