import React, { useState } from 'react'; 
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import TaglineCard from './components/TaglineCard'; 
import Home from './pages/Home';
import News from './pages/News'; 
import VideoPage from './pages/VideoPage'; 
import starterVideos from './models/starterVideos.json';
import Video from './components/Video'; 
import About from './pages/About'; 
import Privacy from './pages/Privacy'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {
  
  const [ videos ] = useState(starterVideos); 
  
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
        <Route exact path="/News" render={() => (
          <>
            <TaglineCard />
            <News/>
            <Footer />
          </>
        )} />
        <Route exact path="/VideoPage" render={() => (
         <>
           <TaglineCard />
           <VideoPage />
           {videos.map((video) => <Video video={video} />)}
           <Footer />
          </>
        )} />
        <Route exact path="/About" render={() => (
          <>
            <TaglineCard />
            <About/>
            <Footer />
          </>
        )} />
        <Route exact path="/Privacy" render={() => (
          <>
            <Privacy />
            <Footer />
          </>
        )} />
   </BrowserRouter>
  );   
}
export default App;


  


