import React, { Component } from 'react';
// import ReactTwitchEmbedVideo from "react-twitch-embed-video"


class Home extends Component {
  render() {
    return (

       <div>
        <div className="home">
        </div>


        <section>
	        <div className="title"> 
	        	- About -
	        </div>
	        <p> 
	        	The league will be built around a Draft pick style. What this means is, each team will have a team captain. This team captain will be tasked with selecting his players, by turn, out of a "Free Agent" pool. All team captains of every team in the league, will select their team this way, much like a pro sports league. We are hoping to do things a little differently here. Instead of all our teams having the very best players we can find, vs the very best players, we want teams built of players from every caliber, working together, to become champions of this League. To apply to join this league, please send an email, by clicking the VGL dropdown at the top!
	        </p>
        </section> 
        <section > 

        	<div className="title"> 

	        	- Top Players -
	        </div>
	        <div className="imgrow"> 
	        	<div>
	        		<a href="http://na.op.gg/summoner/userName=streep"> <img src={require('./images/irelia.gif')} width={150} alt="Streep" /></a>
	        		<h3> Streep </h3>
	        		<h4 className="diamond">⬦ DIAMOND 2 ⬦</h4>

	        	</div> 
	        	<div> 
	        		<a href="http://na.op.gg/summoner/userName=Leesin+Incarnate"> <img src={require('./images/leesin.gif')} width={150} alt="Leesin Incarnate"/></a>
	        		<h3> Leesin Incarnate </h3>
	        		<h4 className="diamond">⬦ DIAMOND 4 ⬦</h4>

	        	</div>
	        	<div> 
	        		<a href="http://na.op.gg/summoner/userName=Xatuo"> <img src={require('./images/yas.gif')} width={150} alt="Xatuo"/></a>
	        		<h3> Xatuo </h3>
	        		<h4 className="plat">⟡ PLAT 4 ⟡</h4>

	        	</div>
	        	<div>
	        		<a href="http://na.op.gg/summoner/userName=trueanxiety"> <img src={require('./images/lucian.gif')} width={150} alt="Plezzy Reformed" /></a>
	        		<h3> Plezzy </h3>
	        		<h4 className="diamond">⬦ DIAMOND 2 ⬦</h4>

	        	</div>
	        	<div>
	        		<a href="http://na.op.gg/summoner/userName=WhaddupJohn"> <img src={require('./images/pyke.gif')} width={150} alt="WHADDUPJOHN" /></a>
	        		<h3> WHADDUPJOHN</h3>
	        		<h4 className="plat">⟡ PLAT 4 ⟡</h4>

	        	</div>
	        </div> 

        </section>
      </div>
    );
  }
}

export default Home;
