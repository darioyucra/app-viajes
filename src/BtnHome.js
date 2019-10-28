import React, { Component } from 'react';
import  imgBtnHome from './btnHome.png';
import './BtnHome.css';
import {
  Link
} from "react-router-dom";

class StartBrowser extends Component  {
  constructor(props){
    super(props);
  }
  render (){ 
    return (
    <div className= "contenedorBtnHome">
      <button><Link to="/"><img src={imgBtnHome} className="iconoHome"/></Link></button>
    </div>
    )
  }
}

export default StartBrowser;

