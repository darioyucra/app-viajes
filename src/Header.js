import React, { Component } from 'react';
import logo1 from './logoNuevo.png';
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import Overlay from 'react-bootstrap/Overlay';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import RegisterLoginBtn from './RegisterLoginBtn';

import {
  Link
} from "react-router-dom";

class Header extends Component  {
  constructor(props){
    super(props);
    
  }
  
  render (){ 
    return (
    <header>
      <nav id="menuPrincipal"> 
        <OverlayTrigger
        trigger="click"
        key={"bottom"}
        placement={"bottom"}
        overlay={
          <Popover id={`popover-positioned-`}>
            <Popover.Content>
            <button><Link to="/login">Log in</Link></button>
          <button><Link to="/createAccount">Create Account</Link></button>
            </Popover.Content>
          </Popover>
        }>
          <Button variant="secondary"><FontAwesomeIcon icon={faUser} /></Button>
        </OverlayTrigger>


      </nav>
      <h1><a href="index.html"><img src={logo1}/></a></h1>
    </header>
    )
  }
}

export default Header;
