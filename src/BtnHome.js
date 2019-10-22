import React, { Component } from 'react';
import  imgBtnHome from './btnHome.png';
import './BtnHome.css';

class StartBrowser extends Component  {
  constructor(props){
    super(props);
  }
  render (){ 
    return (
    <div className= "contenedorBotonBuscar">
      <button><img src={imgBtnHome} className="iconoHome"/></button>
    </div>
    )
  }
}

export default StartBrowser;

