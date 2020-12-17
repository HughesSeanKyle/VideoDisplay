import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import youtube from '../apis/youtube';

const App = () => {
    const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {               //6
        onTermSubmit('buildings')
    }, []);

     // Func will be called when search term submitted      
     const onTermSubmit = async term => {
        //2
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        });

        setVideos(response.data.items);
        setSelectedVideo(response.data.items[0]);

    };


    return (
        <div className="ui container">
            <SearchBar onFormSubmit={onTermSubmit} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo} />
                    </div>
                    <div className="five wide column">
                        <VideoList 
                            onVideoSelect={(video) => setSelectedVideo(video)} //3
                            videos={videos} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );//1
};

export default App;



/*
error at V131 @4:14 = cannot read prop 'snippet' of null. Error comes from state being initialized as null. 

note 1 - onFormSumit can be called anything
note 2 - is now a preconfigured instance of axios
note 3 - onVideoSelect={this.onVideoSelect} => propName = {this.callback}
       - this.setState({ selectedVideo: video }) - The video received from videoItem when       clicked on
note 5 - On search return just use first result as default value for state. 
       - Ensures that that video apears on screen after search. 

note 6 - component did mount method. will 
       - attempt to make some default search when the app component is first rendered to the screen. - UseEffect is it's functional component equivalent

*/