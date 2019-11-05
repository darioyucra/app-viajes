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
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
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
      <Navbar bg="light" expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      </Navbar>

      </nav>
      <h1><a href="index.html"><img src={logo1}/></a></h1>
    </header>
    )
  }
}

export default Header;
