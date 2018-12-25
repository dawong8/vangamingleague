import React, { Component } from 'react';
import { Tabs, Tab, Grid, Row, Col } from 'react-bootstrap';




class Watch extends Component {
  render() {
    return (
      <div style={{padding:'75px', paddingLeft:"12%", paddingRight:"12%", margin:'auto'}}>
        <Tabs defaultActiveKey={1} id="uncontrolled-tab-example">
		  <Tab eventKey={1} title="QUARTERFINALS">
		  	<div className="better"> 
		  		<p style={{color:"gold"}}> Sunday, Jan 5th - DAY 1</p>
		  		



			    <Grid>
				  <Row className="show-grid">
				    <Col xs={1} md={1} >
						<div>
				    		<h3> 10:00pm </h3>
				    	</div>			    
				    </Col>
				    <Col xs={17} md={11}>
				    	<div style={{textAlign:'center'}}>
				    		<h3> Team 1 <i style={{color:"gold"}}> vs. </i> Team 6</h3>
				    		<h5 style={{color:"red"}}> 0 - 2 </h5>
				    	</div>	
				    </Col>
				  </Row>
				</Grid>
			    <hr/>
			    <Grid>
				  <Row className="show-grid">
				    <Col xs={1} md={1} >
						<div>
				    		<h3> 10:00pm </h3>
				    	</div>			    
				    </Col>
				    <Col xs={17} md={11}>
				    	<div style={{textAlign:'center'}}>
				    		<h3> Team 5 <i style={{color:"gold"}}> vs. </i> Team 2</h3>
				    		<h5 style={{color:"red"}}> 1 - 2 </h5>
				    	</div>	
				    </Col>
				  </Row>
				</Grid>
				<hr/>
				<br/>

		  		<p style={{color:"gold"}}> Monday, Jan 6th - DAY 2</p>

		  		<Grid>
				  <Row className="show-grid">
				    <Col xs={1} md={1} >
						<div>
				    		<h3> 10:00pm </h3>
				    	</div>			    
				    </Col>
				    <Col xs={17} md={11}>
				    	<div style={{textAlign:'center'}}>
				    		<h3> Team 1 <i style={{color:"gold"}}> vs. </i> Team 6</h3>
				    		<h5 style={{color:"red"}}> 0 - 2 </h5>
				    	</div>	
				    </Col>
				  </Row>
				</Grid>
			    <hr/>
			    <Grid>
				  <Row className="show-grid">
				    <Col xs={1} md={1} >
						<div>
				    		<h3> 10:00pm </h3>
				    	</div>			    
				    </Col>
				    <Col xs={17} md={11}>
				    	<div style={{textAlign:'center'}}>
				    		<h3> Team 5 <i style={{color:"gold"}}> vs. </i> Team 2</h3>
				    		<h5 style={{color:"red"}}> 1 - 2 </h5>
				    	</div>	
				    </Col>
				  </Row>
				</Grid>
				<hr/>
				<br/>
		  	</div>

		  </Tab>
		  <Tab eventKey={2} title="SEMIFINALS">
		    Tab 2 content
		  </Tab>
		  <Tab eventKey={3} title="FINALS">
		    Tab 3 content
		  </Tab>
		</Tabs>

      </div>
    );
  }
}

export default Watch;
