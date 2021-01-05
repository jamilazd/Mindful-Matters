import React, { useState } from 'react'; 
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header'; 
import Livefeed from './components/Livefeed';
import starterVideos from './models/starterVideos.json'; 
import Video from './components/Video'; 
import About from './Pages/About'; 
import Playlist from './components/Playlist'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = (Props) => {
  
  const [ videos, setVideo ] = useState(starterVideos); 
  
  //write add and remove button functions here
  

  return (
    <BrowserRouter>
      <Header />
        <Route exact path="/" render={() => (
          <>
           <Livefeed />
          </>
        )} />
        <Route exact path="/Video" render={() => (
         <>
           {videos.map((video) => <Video video={video} />)}
          </>
        )} />
        <Route exact path="/Playlist" render={() => (
          <>
            <Playlist/>
          </>
        )} />
        <Route exact path="/About" render={() => (
          <>
            <About/>
          </>
        )} />
   </BrowserRouter>
  );   
}
export default App;


  


