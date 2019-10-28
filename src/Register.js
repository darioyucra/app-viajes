import React, { Component } from 'react';
import './RegisterLoginBtn.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Register extends Component  {
  constructor(props){
    super(props);
  }
  render (){ 
    return (
      <h2>Estas en el register</h2>
    )
  }
}

export default Register;
