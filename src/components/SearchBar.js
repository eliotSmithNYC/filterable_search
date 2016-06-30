import React from 'react';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			//
		}
	}
	render() {
		return(
			<input type="text" value={this.state.value} onChange={this.props.handleChange}/>		
			
		);
	}
	
}