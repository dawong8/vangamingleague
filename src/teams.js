import React, { Component } from 'react';


class Teams extends Component {
  render() {
    return (
       <div style={{padding:'50px', paddingLeft:'15%', paddingRight: '15%', margin:'auto'}}>
        <h1>VAN GAMING LEAGUE - SEASON 1 <span>Teams & Standings </span></h1>
		<main id="tournament">

			<ul class="round round-2">
				<li class="spacer">&nbsp;</li>
				
				<li class="game game-top winner">Gutsi's Babies <span>2</span></li>
				<li class="game game-spacer">&nbsp;</li>
				<li class="game game-bottom ">Rogue Watchers <span>1</span></li>

				<li class="spacer">&nbsp;</li>
				
				<li class="game game-top winner">Messy Plezzy's <span>3</span></li>
				<li class="game game-spacer">&nbsp;</li>
				<li class="game game-bottom ">Team 2 <span>1</span></li>

				<li class="spacer">&nbsp;</li>
				
				<li class="game game-top ">Team 3<span>2</span></li>
				<li class="game game-spacer">&nbsp;</li>
				<li class="game game-bottom winner">Team 1 <span>3</span></li>

				<li class="spacer">&nbsp;</li>
				
				<li class="game game-top ">Team 4 <span>0</span></li>
				<li class="game game-spacer">&nbsp;</li>
				<li class="game game-bottom winner">Team 5 <span>2</span></li>

				<li class="spacer">&nbsp;</li>
			</ul>
			<ul class="round round-3">
				<li class="spacer">&nbsp;</li>
				
				<li class="game game-top winner">Gutsi's Babies <span>3</span></li>
				<li class="game game-spacer">&nbsp;</li>
				<li class="game game-bottom ">Messy Plezzy's <span>0</span></li>

				<li class="spacer">&nbsp;</li>
				
				<li class="game game-top ">Team 1 <span>1</span></li>
				<li class="game game-spacer">&nbsp;</li>
				<li class="game game-bottom winner">Team 5 <span>3</span></li>

				<li class="spacer">&nbsp;</li>
			</ul>
			<ul class="round round-4">
				<li class="spacer">&nbsp;</li>
				
				<li class="game game-top winner">Gutsi's Babies <span>2</span></li>
				<li class="game game-spacer">&nbsp;</li>
				<li class="game game-bottom ">Team 5 <span>0</span></li>
				
				<li class="spacer">&nbsp;</li>
			</ul>		
		</main>
      </div>
    );
  }
}

export default Teams;