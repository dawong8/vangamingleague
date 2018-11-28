import React from 'react';
import Home from './home.js';
import Watch from './watch.js';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Main = () => (
	<BrowserRouter>
		<Switch> 
			<Route exact path="/" component={Home} /> 
			<Route path='/watch' component={Watch} />

		</Switch>
	</BrowserRouter>
)

export default Main; 