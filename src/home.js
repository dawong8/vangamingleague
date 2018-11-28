import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class Home extends Component {
  render() {
    return (
      <div>
        
        <div>
          <img src={require('./images/Spring.jpg')} style={{margin:'auto', width:'100%', paddingBottom:'20px'}} />

        </div>

        <div id="About" style={{background:'#232426', height: '40%', textAlign:'center', margin:'auto', padding:'10%'}}> 
            <p> </p>
            <div>
              <img src={require('./images/dylan.gif')} style={{minWidth:'15%', maxWidth:'15%'}}/> {" "} 
              <img src={require('./images/cass.gif')} style={{minWidth:'15%', maxWidth:'15%'}}/>

            </div>
            <p> </p>
            <p> </p>

            	<p className="fancy" style={{fontSize:'25px', color:'gray'}}> Meet Dylan + Cassandra </p> 
            	<p style={{color:'white', fontSize:'18px', textAlign:'left'}}> Hello! We are Cassandra and Dylan, gamer in training and gamer, and we would like to Welcome you to our channel We_R_Eleven! We live in California and have been married for 9 years and are parents to 2 amazing kids. Current game of choice is Destiny 2 but we like to spice it up here and there. We_R_Eleven is a community we are working to create that celebrates the bonds of friendship and seeks to show that together we can care for each other and have a great time. Eleven represents two individuals, standing side by side, becoming more than 10 times greater than they could ever be on their own. Whether you are struggling in school, work, going through difficult times at home, dealing with mental or physical health issues or just feeling down, you are not alone. </p>
        </div>

        <div id="About" style={{background:'white', height: '40%', textAlign:'center', margin:'auto', padding:'10%'}}> 
        	<Grid>
        		<Row className="show-grid">
				    <Col xs={6} md={4} style={{background:'#f0d9f7', padding:'5%', minHeight:'300px'}}>
				        <p className="fancy" style={{fontSize:'25px', color:'black'}}> Mental Health </p> 
				        <p> Good mental health, an essential component of overall health and well-being, is often overlooked in both the community and the workplace, even though the statistics are staggering.  </p>

				    </Col>
				    <Col xs={6} md={4} style={{background:'#fffafa', padding:'5%', minHeight:'300px'}}>
				      	<p className="fancy" style={{fontSize:'25px', color:'black'}}> Community </p> 
				        <p> Mental health affects people from all walks of life, regardless of age, gender, economic status, or ethnicity.  Whatever our situation, we are all at risk of poor mental health at some point or stage in our life.</p>

				    </Col>
				    <Col xsHidden md={4} style={{background:'#f7d9e9', padding:'5%', minHeight:'300px'}}>
				      	<p className="fancy" style={{fontSize:'25px', color:'black'}}> Stigma </p> 
				      	<p> Mental illness, unfortunately, still carries with it a stigma and doesn’t get the attention it both deserves and needs.  Stay educated and informed. </p>

				    </Col>
				</Row>

        	</Grid>

        </div>

        

      </div>
    );
  }
}

export default Home;
