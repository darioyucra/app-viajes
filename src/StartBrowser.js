import React, { Component } from 'react';
import  FlechaStart from './flecha.png';
import './StartBrowser.css';

class StartBrowser extends Component  {
  constructor(props){
    super(props);
  }
  render (){ 
    return (
    <div className= "contenedorBotonBuscar">
      <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
      <h2>Start Browsing</h2>
      <button><img src={FlechaStart} className="iconoFlecha"/></button>
    </div>
    )
  }
}

export default StartBrowser;
