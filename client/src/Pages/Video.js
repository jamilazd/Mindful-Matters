import React from 'react'; 
import './Video.css'; 

const Video = (props) => {

  const { thumbnail, videoName, description } = props.video; 
  return(
    <div id="video" className="container-fluid">
      <div className="row">
        <img id="vidThumb" className="img-fluid" src="http://localhost:5000/static/BBCvid.png" alt="video image"/> 
        <div id="vidDescription" className="col-sm-8">
          <h2 id="title">{videoName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  ); 
}

export default Video;



