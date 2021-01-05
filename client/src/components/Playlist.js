import React from 'react'; 
import './Playlist.css'; 
import MMLogo from './MMLogo.png'; 


const Playlist = () => {
    return (
       <div className="container-fluid">
           <div className="row">
                <div className="col">
                    <div className="tagline">
                      <h2 id="h2">Your Mind Matters </h2>
                      <br/>
                        <u>
                            <i id="italic"> Mindful Matters' mission is to encourage steps towards better mental wellbeing.</i>
                        </u>
                    </div>
               </div>
            </div>
            <div className="col"  id="explainPlaylist">
                <h2 id="playlistHead">Playlist</h2>
                <p id="playlistP">
                    Welcome to your playlist. Here you can view your saved mindfulness videos.
                    To remove a video from your playlist, click the remove button.  
                    <img className="img-fluid" id="MMLogo2" src={MMLogo} alt="Brand Logo" />
                </p>
            </div>
       </div>
       
    ); 
}

export default Playlist; 