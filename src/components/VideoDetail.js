import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) { // 1
        return <div>Loading...</div>;
    };

    const videoSrc = `http://www.youtube.com/embed/${video.id.videoId}`;
    
    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} />
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;

/*
This is the component where the selected video will render. 

note 1 - If no video then return div with loading text. Initially state is null.  

iframe tag will request all styling done for the video player component. 

*/