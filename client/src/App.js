import React, { useState } from 'react'; 
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import TaglineCard from './components/TaglineCard'; 
import Home from './appPages/Home';
import VideoPage from './appPages/VideoPage'; 
import starterVideos from './models/starterVideos.json';
import Video from './components/Video'; 
import Playlist from './appPages/Playlist'; 
import RemoveFunction from './components/RemoveFunction';  
import About from './appPages/About'; 
import Slideshow from './components/Slideshow'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {

  const [ videos ] = useState(starterVideos);
  const [ playlist, setPlaylist ] = useState([])
  
  const url = 'https://www.googleapis.com/books/v1/volumes?q=title:${mindfulness}&filter=partial&projection=lite'; 
  
    /* connect to google books API and News API 
    var req = new Request(url); 
    fetch(req)
    .then(function(response) {
    console.log(response.json());  
    } );

    const url = 'http://newsapi.org/v2/everything?' + 
    'q=Mental&Wellbeing' + 
    'from=2021-01-28&' +
    'sortBy=popularity&' +
    'apiKey=4128b5e5ed044860bfb6026030687bd2'; 
    var req = new Request(url); 
    fetch(req)
    .then(function(response) {
      console.log(response.json()); 
    } ); 
   */ 
  
    function addVideo(videoName) {
      const addedVideo = videos.find(video => {
        if (videoName === video.videoName) {
          return true; 
        }
        return false; 
      });
      setPlaylist((existingVideos)=> [...existingVideos, addedVideo])
    }

    function removeVideo(videoName) {
      const removedVideo = videos.find(video => {
       if(videoName === video.videoName) {
          return true;
        }
        return false; 
      }); 
      setPlaylist((existingVideos) => {
        return existingVideos.filter(video => {
         if (video.videoName !== removedVideo.videoName) {
            return true; 
          }
          return false; 
         }); 
      });
     
    } 



  return (
    <BrowserRouter>
      <Header />
        <Route exact path="/" render={() => (
          <>
           <TaglineCard />
           <Home />
           <Footer />
          </>
        )} />
        <Route exact path="/Playlist" render={() => (
          <>
            <TaglineCard />
            <Playlist />
            <RemoveFunction videos={playlist} removeVideo={removeVideo} />
            <Footer />
          </>
        )} />
        <Route exact path="/VideoPage" render={() => (
         <>
           <TaglineCard />
           <VideoPage />
           {videos.map((video) => <Video video={video} addVideo={addVideo} />)}
           <Footer />
          </>
        )} />
        <Route exact path="/About" render={() => (
          <>
            <TaglineCard />
            <About/>
            <Slideshow />
            <Footer />
          </>
        )} />
   </BrowserRouter>
  );   
}
export default App;



