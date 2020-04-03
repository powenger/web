import React, { ReactChild } from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';

interface Props extends RouteProps {
	children?: ReactChild,
}

// TODO: implement authentication checker
function PrivateRoute({ children, ...rest }:Props) {
	const authCheck = () => true;

	return (
		<Route
			{...rest}
			render={({ location }) => (authCheck() ? (
				children
			) : (
				<Redirect to={{ pathname: '/login',	state: { from: location } }} />
			))}
		/>
	);
}

export default PrivateRoute;
