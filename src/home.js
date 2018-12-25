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
	        	Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pharetra imperdiet lorem, eget convallis enim viverra non. Morbi auctor mauris vitae dignissim lobortis. Maecenas bibendum magna at vehicula aliquet. Pellentesque condimentum auctor dui, eu malesuada lorem aliquam ac. Nullam quam sapien, rutrum sit amet scelerisque scelerisque, mattis nec magna. Fusce eget imperdiet metus. In sit amet feugiat diam. Etiam laoreet faucibus orci, sit amet lacinia est dapibus non. Morbi mi diam, pretium in pretium a, pulvinar vitae ante. Vestibulum ac dui mi. Aenean facilisis vel ex id cursus. Suspendisse placerat convallis arcu sit amet dapibus. Morbi in mollis lorem, ut elementum nulla. Quisque mi lorem, dictum tincidunt accumsan eu, pretium vitae ligula. Nam convallis sem et metus faucibus pharetra. Nullam eget blandit dui.
Phasellus vestibulum faucibus commodo. Phasellus neque ex, faucibus sed lorem eu, iaculis interdum ipsum. Sed hendrerit odio aliquet, porta odio non, scelerisque ex. Mauris pellentesque posuere sem tincidunt porta. Sed quis consectetur odio. Nam viverra id felis in aliquam. Nulla sit amet pretium odio. Nullam rutrum leo ligula, sit amet ornare metus varius ut. Vestibulum vel velit viverra, egestas ligula a, dapibus velit. Aenean pharetra laoreet tellus. Ut dapibus ex eu leo cursus, non mattis augue ornare. Nam ac felis ullamcorper, dictum metus at, sollicitudin arcu.
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
	        		<a href="http://na.op.gg/summoner/userName=plezzyreformed"> <img src={require('./images/lucian.gif')} width={150} alt="Plezzy Reformed" /></a>
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
