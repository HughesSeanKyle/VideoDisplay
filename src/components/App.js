import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };
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
    
    // Callback for when video selected //3
    onVideoSelect = (video) => {
        console.log('From the App!', video);
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
    );//1
    };
};

export default App;

/*
note 1 - onFormSumit can be called anything
note 2 - is now a preconfigured instance of axios
note 3 - onVideoSelect={this.onVideoSelect} => propName = {this.callback}
*/