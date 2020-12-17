import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
    const [term, setTerm] = useState('');

    const onInputChange = event => {
        setTerm(event.target.value);
    };

    const onSubmit = event => {
        event.preventDefault(); // Prevent submission on enter key down

        onFormSubmit(term); // 1 
    };

    return ( 
        <div className="search-bar ui segment">
           <form onSubmit={onSubmit} className="ui form">
               <div className="field">
                   <label>Video Search</label>
                   <input 
                       type="text" 
                       value={term} 
                       onChange={onInputChange} 
                       // onChange = special event keyword
                   />
               </div>
           </form>
        </div>
        )
};


 export default SearchBar;

 /*
 Parent will be told what the current search term is. 
 */