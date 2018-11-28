import React, { Component } from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"




class Watch extends Component {
  render() {
    return (
      <div style={{padding:'100px', margin:'auto'}}>
        
        <ReactTwitchEmbedVideo channel="we_r_eleven" width="100%"/>
      </div>
    );
  }
}

export default Watch;
