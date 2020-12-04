import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => { //1
    const renderedList = videos.map(video => {
        return <VideoItem onVideoSelect={onVideoSelect} video={video} />
    });

    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    );
};

export default VideoList;

/*
Before destructuring below

const VideoList = (props) => {
    return (
        <div>{props.videos.length}</div>
    );
};

video={video} => propName={arg from map}

note 1
if component parent then no import required ON CHILD to bring certian methods into child. e.g onVideoSelect. 
However, if parent component needs child information, component must be imported. e.g VideoItem
*/