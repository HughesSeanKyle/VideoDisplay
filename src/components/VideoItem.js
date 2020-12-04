import './VideoItem.css';
import React from 'react';

const VideoItem = ({ video, onVideoSelect }) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;

/*
When we need info communicated to children from the parent we can easily do so with the prop system. 

When we need to communicate from a child to parent we can do so with a callback and making sure that the child is imported inside the parent. 

onVideoSelect is destructured from the parent. 
*/