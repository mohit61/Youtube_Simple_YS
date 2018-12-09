// this bracket thing  is same as:
// const Component = React.Component;
import React, {Component} from 'react';

/* This is the way to write component in the form of function.
const SearchBar = function(){
    return <input />;
};
*/

// This is the way to write component in the form of class.
// extending it with React.Component gives it additional functionality.
class SearchBar extends Component {
    // this is the way to define state
    constructor(props){
        super(props);

        this.state = { term: ''};

    }

    //every class based react component have render method
    // and this will return some jsx.
    render(){
        // Change is the name of event and syntax is "on" then the name of event i.e. "Change" i.e. onChage.
        // then inside {} braces we write the method to do some action.
        return (
            <div className="search-bar">
                <img src="https://d1afx9quaogywf.cloudfront.net/sites/default/files/Logos/YouTube.png" alt="youtube" width='120' height='80'/>
                <input 
                    value = {this.state.term}
                    onChange={event => this.onInputChange(event.target.value)}
                />
            </div>
            );
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;