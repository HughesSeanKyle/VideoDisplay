import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    // 6
    componentDidMount() {
        this.onTermSubmit('buildings');
    };

    // Func will be called when search term submitted      
    onTermSubmit = async term => {
        //2
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0] //5
        });
    };
    
    // Callback for when video selected //3
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };

    render() { //4
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
    );//1
    };
};

export default App;

/*
error at V131 @4:14 = cannot read prop 'snippet' of null. Error comes from state being initialized as null. 

note 1 - onFormSumit can be called anything
note 2 - is now a preconfigured instance of axios
note 3 - onVideoSelect={this.onVideoSelect} => propName = {this.callback}
       - this.setState({ selectedVideo: video }) - The video received from videoItem when       clicked on
note 4 - In videoList we are sending an array of videos. Hence, prop name videos(plural)
       - In VideoDetail we are passing down a single video. Hence, prop name video(singular)
note 5 - On search return just use first result as default value for state. 
       - Ensures that that video apears on screen after search. 

note 6 - component did mount method. will 
       - attempt to make some default search when the app component is first rendered to the screen.

*/