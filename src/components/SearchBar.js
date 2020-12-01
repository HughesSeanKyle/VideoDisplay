import React from 'react';

 class SearchBar extends React.Component {
    state = { term: '' };

    onInputChange = (e) => {
        console.log(e.target.value);
    };

     render() {
         return ( 
         <div className="search-bar ui segment">
            <form className="ui form">
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