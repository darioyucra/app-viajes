import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Inicio from './Inicio';

class App extends Component  {
  constructor(){
    super()
  }
  render (){ return (
    <div className="App">
     <div>
       <Inicio></Inicio>
      </div>
    </div>
  )
  }
}

export default App;