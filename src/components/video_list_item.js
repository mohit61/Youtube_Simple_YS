import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    //const onVideoSelect = props.onVideoSelect
    //const video = props.video;// this can also be written as replacing props in the function argument with {video}.
    // thus {video} is passed as function argument.
    // thus we get the whole video information from video_list where video={video} is passed.
    // u can do console.log(video) here to get all the information that we get.
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
};

export default VideoListItem;
