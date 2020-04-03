import React, { Component } from 'react';
import { withStyles, WithStyles } from '@material-ui/styles';
import style from '../../assets/styles/views/Main';

interface Props extends WithStyles<typeof style> {}

class Main extends Component<Props> {
	render() {
		const { classes } = this.props;
		return (
			<div className={classes.title}>Hello World</div>
		);
	}
}


export default withStyles(style)(Main);
