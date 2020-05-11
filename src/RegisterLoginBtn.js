import React, { Component } from 'react';
import logo1 from './logoNuevo.png';
import './RegisterLoginBtn.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class RegisterLoginBtn extends Component  {
  constructor(props){
    super(props);
  }
  render (){ 
    return (
      <div className="contenedorRegisterLogin">
        <div className="contenedorBotones">
          <button><Link to="/login">Log in</Link></button>
          <button><Link to="/createAccount">Create Account</Link></button>
        </div>
      </div>
    )
  }
}

export default RegisterLoginBtn;
