import React, { Component } from 'react';
import logo1 from './logoNuevo.png';
import './RegisterLoginBtn.css';

class RegisterLoginBtn extends Component  {
  constructor(props){
    super(props);
  }
  render (){ 
    return (
      <div className="contenedorRegisterLogin">
        <p>Whant to build your own MYtinerary?</p>
        <div className="contenedorBotones">
          <button>Log in</button>
          <button>Create Account</button>
        </div>
      </div>
    )
  }
}

export default RegisterLoginBtn;
