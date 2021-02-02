import React from 'react'; 
import './VideoPage.css'; 

const VideoPage = () => {
  return (
    <div id="textContainer" >
      <div id="textBackground" className="col">
        <h1 id="videoHead">Stop for a moment...</h1>
        <p id="videoP">
          Mindfulness can reduce stress and relax the mind.
          Below is a carefully curated selection of videos you can watch now! 
        </p>
        <form>
          <h3 id="formHead">How are you feeling today?</h3>
          <input className="hide" type="checkbox" title="Happy" name="happy" id="happy" />
          <label for="happy" className="option-happy">Happy</label>
          <input className="hide" type="checkbox" title="Meh" name="meh" id="meh" />
          <label for="meh" className="option-meh">Meh</label>
          <input className="hide" type="checkbox" title="Sad" name="sad" id="sad" />
          <label for="sad" className="option-sad">Sad</label>
        </form>
      </div>
   </div>
  ); 
}



export default VideoPage; 