import React, { Component } from 'react';
import logo1 from './logoNuevo.png';
import './header.css';

class Header extends Component  {
  constructor(props){
    super(props);
  }
  render (){ 
    return (
    <header>
      <h1><a href="index.html"><img src={logo1}/></a></h1>
    </header>
    )
  }
}

export default Header;
