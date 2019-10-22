import React, { Component } from 'react';
import Header from './Header';
import StartBrowser from './StartBrowser';

class Inicio extends Component  {
  constructor(props){
    super(props);
  }
  
  render (){ 
    return (
      <div>
      <Header></Header>
      <StartBrowser></StartBrowser>
      </div>
    )
  }
}

export default Inicio;
