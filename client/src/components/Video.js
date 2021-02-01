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
      </div>
    </div>
  ); 
}

export default Video;




// {videos.map((video) => <Video video={video} />)}
// {articles.map((livefeed) => <Livefeed livefeed={livefeed} />)}