import React, { Component } from 'react';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';

import Main from './main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect className="header">
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"> <img src={require('./images/VanLogoWhite.png')} alt="logo" width={75}/></a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={2} href="/watch">
                SCHEDULE
              </NavItem>
              <NavItem eventKey={1} href="/teams">
                TEAMS & STANDINGS
              </NavItem>
              <NavItem eventKey={4} href="https://www.twitch.tv/vangamingleague">
                WATCH
              </NavItem>
              
              <NavDropdown eventKey={3} title="ABOUT VGL" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="/">Sign Up</MenuItem> 
                <MenuItem eventKey={3.2} href="https://discord.gg/kwNwr7J">Discord</MenuItem>
                <MenuItem eventKey={3.3} href="https://www.twitch.tv/vangamingleague">Twitch</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="/">Season 2 - Coming Soon</MenuItem>

              </NavDropdown>
              
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        
        <Main/>
        


      </div>
    );
  }
}

export default App;
