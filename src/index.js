import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY= 'AIzaSyDHoWxWNLPjbTgA6JuJBgR1E7Hy3KgmxBU';

class App extends Component {

    constructor(props){
        super(props);
        this.state={
            videos: [],
            selectedVideo: null
        };
        YTSearch({key: API_KEY, term: 'mountain'}, data => this.setState({videos: data}));
    }

    render(){
return (
    <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
        <VideoDetail video={this.state.selectedVideo}/>
    </div>
    );
    }
    
}
ReactDom.render(<App/>,document.querySelector('.container'));