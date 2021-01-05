import React from 'react'; 
import './Video.css'; 


const Video = (props) => {
  const { thumbnail, videoName, description } = props.video; 
  return(
    <div id="vidContainer" className="container-fluid">
      <div className="row">
        <div className="col-sm-8">
          <u><h2 id="title">{videoName}</h2></u>
          <p>{description}</p>
          <img className="" src={thumbnail} alt="video thumbnail"/>
        </div>
      </div>
    </div>
  ); 
}

export default Video;


/* Mindfulness meditation can help reduce stress and relax the mind. Below is a carefully curated selection
of Mindfulness videos you can watch now or add to your playlist for later. */

/*  
  <div className="col">
    <h1 id="videoHead">Stop for a moment...</h1>
    <p id="videoP">
      Mindfulness focuses on being aware of your feelings in the moment, without interruption or judgement. 
    </p>
  </div>

   <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={thumbnail} alt="video thumbnail"/>
            <div className="card-body">
              <h3 className="card-title">{videoName} {author}</h3>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>







*/


