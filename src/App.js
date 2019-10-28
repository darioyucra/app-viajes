import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import StartBrowser from './StartBrowser';
import BtnHome from './BtnHome';
import RegisterLoginBtn from './RegisterLoginBtn';
import Login from './Login';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component  {
  constructor(){
    super()
  }
  render (){ return (
    <div className="App">
    <Router>
          <Header />
    <Switch>
        <Route exact path="/">
          <StartBrowser />
          <RegisterLoginBtn />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
    </Switch> 
          <BtnHome />
    </Router>
    </div>
  )
  }
}

export default App;