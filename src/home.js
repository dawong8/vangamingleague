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
            	<p style={{color:'white', fontSize:'18px', width:'65%', margin:'auto'}}> Hello! We are Cassandra and Dylan, gamer in training and gamer, and we would like to Welcome you to our channel We_R_Eleven! We live in California and have been married for 9 years and are parents to 2 amazing kids. Current game of choice is Destiny 2 but we like to spice it up here and there. We_R_Eleven is a community we are working to create that celebrates the bonds of friendship and seeks to show that together we can care for each other and have a great time. Eleven represents two individuals, standing side by side, becoming more than 10 times greater than they could ever be on their own. Whether you are struggling in school, work, going through difficult times at home, dealing with mental or physical health issues or just feeling down, you are not alone. </p>
        </div>

        <div id="About" style={{background:'white', height: '40%', textAlign:'center', margin:'auto', padding:'7%'}}> 
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
        <div id="About" style={{background:'white', height: '40%', textAlign:'center', margin:'auto', paddingBottom:'10%'}}> 
        	<p className="fancy" style={{fontSize:'45px', color:'black'}}> Our Story </p>
        	<p style={{fontSize:'15px', color:'grey'}}> “When one and one are one, eleven.”  </p>
        	<p className="better" style={{fontSize: '20px', color: 'black', width:'60%', margin:'auto'}}> Everyday we look down at my scars and are grateful for them. That’s a weird thing to say but they are a reminder of the battle we fought to keep me alive. Is the battle really over? Heck no. But I am alive NOW and that is all that matters. 
When I would hurt myself, this is the arm that took the brunt of it. When things got really bad, scars started to appear on the other side of this arm. Too close close for comfort. Too many times I tiptoed the line to end it all. But it was my amazing husband and the support network we created together that helped me get through the toughest times of our life so far. I am very lucky to have had my husband, our We R Eleven community on Twitch, and other communities that helped US through everything dark and scary. Sadly, others are not so lucky and are too afraid to say anything or ask for help. 
November 11th (11/11) is a day we have chosen to celebrate the supporters who are out there making a difference to keep us alive. Suicide and Mental Health go hand in hand and without a support network, those we love could be lost to us. Both are real things and we want to do our part in supporting foundations like the American Foundation for Suicide Prevention to make sure support is out there for others.</p>
			<p> </p>
			<span> <a href="https://www.instagram.com/explore/tags/mentalhealthawareness/"> <text style={{fontSize: '20px'}}> #MentalHealthAwareness </text> </a> </span> 
			<span> <a href="https://www.instagram.com/explore/tags/mentalhealth/"> <text style={{fontSize: '20px'}}> #MentalHealth </text> </a> </span> 

        </div>

        

      </div>
    );
  }
}

export default Home;
