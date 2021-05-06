// @flow

import * as React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import NavbarC from './Component/Navbar';
import App from './Component/App'
// import {reducer} from "./reducer/reducer"
import {formReducer,listReducer,modalReducer} from "./reducer/reducer"
import {Provider} from "react-redux"
import { Container,Jumbotron} from 'react-bootstrap';
import {createStore,combineReducers} from "redux"

const rootReducer = combineReducers({
    fReducer: formReducer,
    lReducer : listReducer,
    mReducer : modalReducer,
})

const store = createStore
(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )



ReactDOM.render(
  <Provider store={store}>
  <Container fluid className="container">
    <NavbarC />
    <Jumbotron className="jumbotrom">
        <App/>
   </Jumbotron>
</Container>
</Provider>
  ,
  document.getElementById('root')
);


