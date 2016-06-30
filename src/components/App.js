import React from 'react';
import SearchBar from './SearchBar'
import FilterableList from './FilterableList'

const libraries = [

    { name: 'Backbone.js', url: 'http://documentcloud.github.io/backbone/'},
    { name: 'AngularJS', url: 'https://angularjs.org/'},
    { name: 'jQuery', url: 'http://jquery.com/'},
    { name: 'Prototype', url: 'http://www.prototypejs.org/'},
    { name: 'React', url: 'http://facebook.github.io/react/'},
    { name: 'Ember', url: 'http://emberjs.com/'},
    { name: 'Knockout.js', url: 'http://knockoutjs.com/'},
    { name: 'Dojo', url: 'http://dojotoolkit.org/'},
    { name: 'Mootools', url: 'http://mootools.net/'},
    { name: 'Underscore', url: 'http://documentcloud.github.io/underscore/'},
    { name: 'Lodash', url: 'http://lodash.com/'},
    { name: 'Moment', url: 'http://momentjs.com/'},
    { name: 'Express', url: 'http://expressjs.com/'},
    { name: 'Koa', url: 'http://koajs.com/'},

];

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			libraries,
		}
	}
	render() {
		return(
			<div> 
				<h1>Search Popular Libraries</h1>
				<SearchBar 		handleChange={this.handleChange.bind(this)} 
								libraries={this.state.libraries} />
				<FilterableList libraries={this.state.libraries} />		
			</div>
		);
	}
	handleChange(e) {
		e.preventDefault;
		var searchString = e.target.value.toLowerCase().trim();
		var filteredList = libraries.filter(function(lib) {
      		return lib.name.toLowerCase().match(searchString);
      	});
		this.setState({
			libraries: filteredList
		});
	}

}