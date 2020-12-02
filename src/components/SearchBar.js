import React from 'react';

 class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault(); // Prevent submission on enter key down

        // TODO: Make sure to call
        // callback from parent. 
            // To tell app user submitted form and want to initiate new search. 
    };

     render() {
         return ( 
         <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input 
                        type="text" 
                        value={this.state.term} 
                        onChange={this.onInputChange} 
                        // onChange = special event keyword
                    />
                </div>
            </form>
         </div>
         )
     };
 };

 export default SearchBar;