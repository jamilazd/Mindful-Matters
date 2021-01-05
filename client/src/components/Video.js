import React from 'react'; 
import './Video.css'; 


const Video = (props) => {
  const { thumbnail, videoName, author, description, videoLink } = props.video; 
  return(
    <div className="container-fluid">
      <img className="img-fluid" src={thumbnail} alt="video thumbnail"/>
      <h3>{videoName} {author}</h3>
      <p>{description}</p>
      <p>{videoLink}</p>
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


*/


