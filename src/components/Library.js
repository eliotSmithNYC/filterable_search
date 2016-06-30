import React from 'react';
import _ from 'lodash';

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {
		return(
			<li>{this.props.name}</li>
		);
	}
	
}