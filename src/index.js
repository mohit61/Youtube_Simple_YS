//we usually use underscore for importing loadash i.e. it is same as import lodash from 'lodash'
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from  'youtube-api-search';
import VideoList from "./components/video_list";
import VideoDetail from './components/video_detail';

// YOUTUBE api key.
const API_KEY = 'PUT API KEY HERE';

// creating new component that produce some HTML
// App is the parent of all components like search_bar etc.
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('eminem');
    }

    videoSearch(term){
        // the word inside function can be written anything like instead of videos you can write foo
        YTSearch({key: API_KEY, term: term}, (videos) => {
            // the below statement can also be written like: this.setState({videos});, i.e. when key and value are same.
            this.setState({
                videos : videos,
                selectedVideo: videos[0]
            });
            //console.log(videos);
        });
    }

    render(){
        //for searching in after specific time interval. so the inner function(with argument term) is called once in every 300mili sec.
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                { /* we want to pass data of state, i.e. list of videos to child. Note
                 here state is in the parent i.e. App class and we need to pass it to child class that is under it.
                 and to pass videos we use jsx property named videos.
                 and this is known as passing props.
                */}

                <VideoDetail  video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
}


// taking this component's generated HTML and placing it
// in the page(i.e. in the DOM)
ReactDom.render(<App />, document.querySelector('.container'));
