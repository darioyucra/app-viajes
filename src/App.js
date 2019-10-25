import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import StartBrowser from './StartBrowser';
import BtnHome from './BtnHome';
import RegisterLoginBtn from './RegisterLoginBtn';

class App extends Component  {
  constructor(){
    super()
  }
  render (){ return (
    <div className="App">
       <Header></Header>
      <StartBrowser></StartBrowser>
      <RegisterLoginBtn></RegisterLoginBtn>
      <BtnHome></BtnHome>
    </div>
  )
  }
}

export default App;