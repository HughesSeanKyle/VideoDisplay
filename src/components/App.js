import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [] };
    // Func will be called when search term submitted
    onTermSubmit = async term => {
        //2
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ videos: response.data.items });
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                I have {this.state.videos.length} videos.
            </div>
    );//1
    };
};

export default App;

/*
note 1 - onFormSumit can be called anything
note 2 - is now a preconfigured instance of axios
*/