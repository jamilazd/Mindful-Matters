import React from 'react'; 
import './Video.css'; 

const Video = (props) => {

  const { thumbnail, videoLink, videoName, description } = props.video; 
  return(
    <div id="back" className="container-fluid">
      <div className="row" >
        <div className="col">
          <img id="vidThumb" className="img-fluid" src={thumbnail} alt="thumbnailImage" />
          <div id="vidDescription">
            <a href={videoLink} target="blank"> <h1 id="vidName">{videoName}</h1> </a>
            <p id="description">{description}</p> 
          </div>
        </div>
        <div className="buttonCollection">
          {props.addVideo && (
            <button id="addButton" type="button"  className="btn btn-secondary" onClick={() => props.addVideo(videoName)}>Add Video</button>
          )}
          {props.removeVideo && (
           <button id="removeButton" type="button"  className="btn btn-secondary" onClick={() => props.removeVideo(videoName)}>Remove Video</button>
          )}
        </div>
      </div>
    </div>
  ); 
}

export default Video;




// {videos.map((video) => <Video video={video} />)}
// {articles.map((livefeed) => <Livefeed livefeed={livefeed} />)}