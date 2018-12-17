import React from 'react';
import Home from './home.js';
import Watch from './watch.js';
import Teams from './teams.js';
import Stats from './stats.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = () => (
	<BrowserRouter>
		<Switch> 
			<Route exact path="/" component={Home} /> 
			<Route path='/watch' component={Watch} />
			<Route path='/teams' component={Teams} />
			<Route path='/stats' component={Stats} />

		</Switch>
	</BrowserRouter>
)

export default Main; 