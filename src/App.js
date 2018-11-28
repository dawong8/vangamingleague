import React, { Component } from 'react';
import {Navbar, NavItem, NavDropdown, Nav, MenuItem} from 'react-bootstrap';
import { SocialIcon } from 'react-social-icons';

import Main from './main.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/"> We R Eleven</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={2} href="/watch">
                Watch
              </NavItem>
              <NavItem eventKey={1} href="https://wereleven.podbean.com/">
                Podcast
              </NavItem>
              
              <NavDropdown eventKey={3} title="Find Support" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1} href="https://itunes.apple.com/us/podcast/the-we-r-eleven-podcast/id1435741008?mt=2">iTunes Podcast</MenuItem> 
                <MenuItem eventKey={3.2} href="https://discord.gg/NsPBMCw">Discord</MenuItem>
                <MenuItem eventKey={3.3} href="https://www.twitch.tv/we_r_eleven">Twitch</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3} href="https://afsp.org/">American Foundation for Suicide Prevention</MenuItem>
                <MenuItem eventKey={3.3} href="https://www.crisistextline.org/">Suicide Hotline</MenuItem>
                <MenuItem eventKey={3.3} href="http://remedylive.com/category/issues/suicide/">Remedy Live</MenuItem>
                <MenuItem eventKey={3.3} href="https://www.mylifemypower.org/resources/?gclid=Cj0KCQiA8_PfBRC3ARIsAOzJ2uq9BWCSEWVnE07fcvizUeqtu7mjzrlATQ7swDCavT0qBvUnLLNTrpkaAoSUEALw_wcB">My Life My Power</MenuItem>


              </NavDropdown>
              
            </Nav>
            
          </Navbar.Collapse>
        </Navbar>
        
        <Main/>
        

        <div id="About" style={{background:'white', height: '5%', textAlign:'center', margin:'auto'}}> 

          <SocialIcon url="https://twitter.com/we_r_eleven" />
          <SocialIcon url="https://www.instagram.com/we_r_eleven/" />
          <SocialIcon url="https://www.twitch.tv/we_r_eleven" />
          <SocialIcon url="https://itunes.apple.com/us/podcast/the-we-r-eleven-podcast/id1435741008?mt=2" />
          <SocialIcon url="https://discordapp.com/invite/UD7g8x" />


        </div>


      </div>
    );
  }
}

export default App;
