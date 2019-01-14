import React, { Component } from 'react';
import {OverlayTrigger, Button, Popover} from 'react-bootstrap';

const popoverTop = (
  <Popover id="popover-positioned-top" title="Team 3 vs. Team 4">
    <strong>8:30 EST</strong> 
  </Popover>
);

const popoverTop11 = (
  <Popover id="popover-positioned-top" title="Team 1 vs. Team 5">
    <strong>9:00 EST</strong> 
  </Popover>
);

const popoverTop12 = (
  <Popover id="popover-positioned-top" title="Team 1 vs. 2 | Team 3 vs. 7">
    <strong>9:00 EST, 10:00 EST</strong> 
  </Popover>
);

const popoverTop13 = (
  <Popover id="popover-positioned-top" title="Team 5 vs. Team 6">
    <strong>9:00 EST</strong> 
  </Popover>
);


const popoverTop20 = (
  <Popover id="popover-positioned-top" title="Team 2 vs. Team 6">
    <strong>9:00 EST</strong> 
  </Popover>
);

const popoverTop18 = (
  <Popover id="popover-positioned-top" title="Team 1 vs. Team 5">
    <strong>9:00 EST</strong> 
  </Popover>
);

const popoverTop19 = (
  <Popover id="popover-positioned-top" title="Team 2 vs. Team 7">
    <strong>9:00 EST</strong> 
  </Popover>
);


class Watch extends Component {
  render() {
    return (
     	<div> 

     		<div className="calendar">
     			<h2 id="calendar-title"> JAN 2019 </h2>

     			<div className="week"> 
	     			<span>  </span>
	     			<span>  </span>
	     			<span> 1 </span>
	     			<span> 2 </span>
	     			<span> 3 </span>
	     			<span> 4 </span>
	     			<span> 5 </span>
     			</div>
     			<div className="week"> 
	     			<span> 6 </span>
	     			<span> 7 </span>
	     			<span> 
		     			8
   					 </span>
	     			<span> 9 </span>
	     			<span> 10 </span>
	     			<span> 

	     				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop11}>
	      					<span style={{color:"#a83958"}}> 11 </span>
	    				</OverlayTrigger>
	    				<div className="eventdate"> 9:00pm EST </div>
	    				<div className="eventtime"> Teams 1 vs 5 </div>
	     			</span>
	     			<span> 
	     				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop12}>
	      					<span style={{color:"#a83958"}}> 12 </span>
	    				</OverlayTrigger>
	    				<div className="eventdate"> 9:00pm EST </div>
	    				<div className="eventtime"> Teams 1 vs 2 </div>
	    				<div className="eventdate"> 10:00pm EST </div>
	    				<div className="eventtime"> Teams 3 vs 7 </div>
	     			</span>
     			</div>
     			<div className="week"> 
	     			<span> 
	     				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop13}>
	      					<span style={{color:"#a83958"}}> 13 </span>
	    				</OverlayTrigger>
	    				<div className="eventdate"> 9:00pm EST </div>
	    				<div className="eventtime"> Teams 5 vs 6 </div>
	     			</span>
	     			<span> 
	     				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
	      					<span style={{color:"#a83958"}}> 14 </span>
	    				</OverlayTrigger>
	    				<div className="eventdate"> 8:30pm EST </div>
	    				<div className="eventtime"> Teams 3 vs 4 </div>
	     			</span>
	     			<span> 15 </span>
	     			<span> 16 </span>
	     			<span> 17 </span>
	     			<span> 
	     				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop18}>
	      					<span style={{color:"#a83958"}}> 18 </span>
	    				</OverlayTrigger>
	    				<div className="eventdate"> 9:00pm EST </div>
	    				<div className="eventtime"> Teams 1 vs 5 </div>
	    			</span>
	    			<span> 
	     				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop18}>
	      					<span style={{color:"#a83958"}}> 19 </span>
	    				</OverlayTrigger>
	    				<div className="eventdate"> 9:00pm EST </div>
	    				<div className="eventtime"> Teams 2 vs 7 </div>
	    			</span>

     			</div>
     			<div className="week"> 
	     			<span> 
	     				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop20}>
	      					<span style={{color:"#a83958"}}> 20 </span>
	    				</OverlayTrigger>
	    				<div className="eventdate"> 9:00pm EST </div>
	    				<div className="eventtime"> Teams 2 vs 6 </div>
	     			</span>
	     			<span> 21 </span>
	     			<span> 
	     				<OverlayTrigger trigger="click" placement="top" overlay={popoverTop}>
	      					<span style={{color:"#a83958"}}> 22 </span>
	    				</OverlayTrigger>
	    				<div className="eventdate"> 8:30pm EST </div>
	    				<div className="eventtime"> Teams 3 vs 4 </div>
	    			</span>
	     			<span> 23 </span>
	     			<span> 24 </span>
	     			<span> 25 </span>
	     			<span> 26 </span>
     			</div>
     			<div className="week"> 
	     			<span> 27 </span>
	     			<span> 28 </span>
	     			<span> 29 </span>
	     			<span> 30 </span>
	     			<span> 31 </span>
	     			<span>  </span>
	     			<span>  </span>
     			</div>
     			
     		</div>





     	</div>
    );
  }
}

export default Watch;
