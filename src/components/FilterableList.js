import React from 'react';
import _ from 'lodash';
import Library from './library';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    renderLibraries() {
        const props = this.props;
        const libraries = this.props.libraries;

        return _.map(libraries, (library, index) => <Library key={index} {...library} {...props} />);
    }

    render() {
        
        return(
            <ul>
                { this.renderLibraries() }
            </ul>
        );
    }
    
}