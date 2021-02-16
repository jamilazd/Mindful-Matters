import React from 'react'; 
import './Playlist.css'; 

const Playlist = () => {
  return (
    <div>
      <div id="playlistBox" className="col">
        <h1 id="playlistH">Be kind to Yourself</h1>
      </div>
      <div>
        <h2 id="playlistH2">Playlist</h2>
        <p id="playlistP">
          Here you can save a personal playlist of mindfulness videos, to watch anytime. 
        </p>
      </div>
      <div className="row">
        <div className="col-sm">
          <div className="playlistCard">
            <div className="card" id="cardStyle">
              <img src="http://localhost:5000/static/relax3.jpg" alt="woman crossed legged, meditating" />
            </div>
          </div> 
        </div>
        <div className="col-sm">
          <div className="playlistCard">
            <div className="card" id="cardStyle">
              <img src="http://localhost:5000/static/relax1.png" alt="woman sitting meditating" />
            </div>
          </div> 
        </div>
        <div className="col-sm">
          <div className="playlistCard">
            <div id="cardStyle" className="card">
              <img src="http://localhost:5000/static/relax2.png" alt="woman meditating" />
            </div>
          </div> 
        </div>       
      </div>
    </div>  
  ); 
}

export default Playlist; 

