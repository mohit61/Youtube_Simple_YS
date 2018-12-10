import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // props.videos is the array of videos.
    // map is like for loop
    const videoItems = props.videos.map((video) => {
        return (
        <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
        />
        ) ;
    });
    //here col-md-4 is the bootstrap class to do styling and 4 is the width and
    //can be changed.
    return (
        <ul className="col-md-4 list-group">
            {videoItems}
        </ul>
    );
};

export default VideoList;
