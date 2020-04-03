import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Misc/PrivateRoute';

// Containers
// TODO: Use code spliting and dynamic importing
import Main from './Main';
import Login from './Auth/Login';
import Page404 from './Misc/Page404';


class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<PrivateRoute exact path="/"><Main /></PrivateRoute>
					<Route exact path="/login" component={Login} />
					<Route path="*" component={Page404} />
				</Switch>
			</Router>
		);
	}
}

export default App;
