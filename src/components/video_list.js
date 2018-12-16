import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    // props.videos is the array of videos.
    // map is like for loop
    // react requires a key to identify each element, so we use key and etag is
    // the unique key for each youtube video.
    // each video item is returned for the map or loop used below.
    // also we passed video property to video_list_item and contains whole
    // video information that is used in video_list_item to display relevent
    // content of the video.
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
