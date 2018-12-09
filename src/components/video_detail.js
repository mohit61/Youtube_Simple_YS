import React from 'react';

const VideoDetail = ({video}) => {
    if(!video){
        return(
            <div class="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif" alt="Loading..."></img>
            </div>
        );
    }

    const videoId = video.id.videoId;
    const url = 'https://www.youtube.com/embed/' + videoId;
    // the above can also be written as 
    // const url = `https://www.youtube.com/embed/${videoId}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe> 
            </div>

            <div className="details">
                <div><strong>{video.snippet.title}</strong></div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetail;