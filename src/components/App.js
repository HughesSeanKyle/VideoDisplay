import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    // Func will be called when search term submitted
    onTermSubmit = term => {
        //2
        youtube.get('/search', {
            params: {
                q: term
            }
        });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
            </div>
    );//1
    };
};

export default App;

/*
note 1 - onFormSumit can be called anything
note 2 - is now a preconfigured instance of axios
*/