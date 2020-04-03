import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Containers
// TODO: Use code spliting and dynamic importing
import Main from './Main';
import Page404 from './Misc/Page404';


class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="*" component={Page404} />
				</Switch>
			</Router>
		);
	}
}

export default App;
