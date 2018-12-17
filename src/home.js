import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"


class Home extends Component {
  render() {
    return (
       <div style={{padding:'50px', paddingLeft:'15%', paddingRight: '15%', margin:'auto'}}>
        
        <ReactTwitchEmbedVideo channel="jaze_tv" width="100%" height="600px" layout="video"/>
      </div>
    );
  }
}

export default Home;
