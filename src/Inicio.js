import React, { Component } from 'react';
import Header from './Header';
import StartBrowser from './StartBrowser';
import BtnHome from './BtnHome';

class Inicio extends Component  {
  constructor(props){
    super(props);
  }
  
  render (){ 
    return (
      <div>
      <Header></Header>
      <StartBrowser></StartBrowser>
      <BtnHome></BtnHome>
      </div>
    )
  }
}

export default Inicio;
