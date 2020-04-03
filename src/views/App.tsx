import React, { Component } from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import style from '../assets/styles/views/App';

interface Props extends WithStyles<typeof style> {

}

class App extends Component<Props> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.title}>Hello World</div>
		);
	}
}

export default withStyles(style)(App);
