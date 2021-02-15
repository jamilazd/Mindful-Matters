import React from 'react'; 
import Video from './Video.js'; 
import './RemoveFunction.css';


const RemoveFunction = (props) => {
    return (
        <div id="playlistBG">
            {props.videos.map((video) => <Video video={video} removeVideo={props.removeVideo} /> )}
        </div>
        
    ); 
}

export default RemoveFunction;

