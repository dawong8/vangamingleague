import React, { Component } from 'react';
import ReactTwitchEmbedVideo from "react-twitch-embed-video"




class Watch extends Component {
  render() {
    return (
      <div style={{padding:'50px', margin:'auto'}}>
        
        <ReactTwitchEmbedVideo channel="we_r_eleven" width="100%" height="600px"/>
      </div>
    );
  }
}

export default Watch;
