import React from 'react'; 
import './Video.css'; 


const Video = (props) => {

  const { thumbnail, videoName, description } = props.video; 
  return(
    <div id="video" className="container-fluid">
      <div className="row">
        <img id="vidThumb" className="img-fluid" src={thumbnail} alt="video image"/> 
        <div id="vidDescription" className="col-sm-8">
          <h2 id="title">{videoName}</h2>
          <p>{description}</p>
        </div>
      </div>
    </div>
  ); 
}

export default Video;


/*  
  <div className="col">
    <h1 id="videoHead">Stop for a moment...</h1>
    <p id="videoP">
      Mindfulness meditation can help reduce stress and relax the mind
      Below is a carefully curated selection of Mindfulness videos you can watch now. 
    </p>
  </div>
*/


