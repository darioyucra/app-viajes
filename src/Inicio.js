import React, { Component } from 'react';
import Header from './Header';
import StartBrowser from './StartBrowser';
import BtnHome from './BtnHome';
import RegisterLoginBtn from './RegisterLoginBtn';

class Inicio extends Component  {
  constructor(props){
    super(props);
  }
  
  render (){ 
    return (
      <div>
      <Header></Header>
      <StartBrowser></StartBrowser>
      <RegisterLoginBtn></RegisterLoginBtn>
      <BtnHome></BtnHome>
      </div>
    )
  }
}

export default Inicio;
