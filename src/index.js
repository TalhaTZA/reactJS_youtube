import React, {Component} from 'react';
import ReactDom from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';
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
        
        this.videoSearch('lion');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term}, data => this.setState({
            videos: data,
            selectedVideo: data[0]
        }));
    }

    render(){

        const stall=_.debounce(term=> {this.videoSearch(term)},300);

return (
    <div>
        <SearchBar onSearchTermChange={stall} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList  onVideoSelect={selectedVideo => this.setState({selectedVideo})} 
        videos={this.state.videos}/>
    </div>
    );
    }
    
}
ReactDom.render(<App/>,document.querySelector('.container'));