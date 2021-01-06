import React from 'react'; 
import './Video.css'; 


const Video = (props) => {

  const { thumbnail, videoName, description } = props.video; 
  return(
    <div id="video" className="container-fluid">
      <div className="row">
        <img className="img-fluid" src={thumbnail} alt="video image"/> 
        <div id="vidDescription" className="col-sm-8">
          <u><h2 id="title">{videoName}</h2></u>
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
      Mindfulness focuses on being aware of your feelings in the moment, without interruption or judgement. 
    </p>
  </div>
  <p>
    Mindfulness meditation can help reduce stress and relax the mind. Below is a carefully curated selection
    of Mindfulness videos you can watch now. 
  </p>
*/


