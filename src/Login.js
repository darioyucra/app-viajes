import React, { Component } from 'react';
import './RegisterLoginBtn.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Login extends Component  {
  constructor(props){
    super(props);
  }
  render (){ 
    return (
      <h2>Estas en el login</h2>
    )
  }
}

export default Login;
