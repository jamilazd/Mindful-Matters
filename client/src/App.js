import React, { useState } from 'react'; 
import { BrowserRouter, Route, } from 'react-router-dom';
import Header from './components/Header'; 
import Footer from './components/Footer'; 
import TaglineCard from './components/TaglineCard'; 
import Home from './pages/Home';
import News from './pages/News';
import Livefeed from './components/Livefeed'; 
import VideoPage from './pages/VideoPage'; 
import starterVideos from './models/starterVideos.json';
import Video from './components/Video'; 
import About from './pages/About'; 
import Slideshow from './components/Slideshow'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 

const App = () => {

  const [ videos ] = useState(starterVideos);
  //const [ livefeedData, setLivefeedData ] = useState({}); 
  
  const url = 'http://newsapi.org/v2/everything?' + 
    'q=Mental&Wellbeing' + 
    'from=2021-01-28&' +
    'sortBy=popularity&' +
    'apiKey=4128b5e5ed044860bfb6026030687bd2'; 
    var req = new Request(url); 
    fetch(req)
    .then(function(response) {
      console.log(response.json()); 
  }); 

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
            <Livefeed />
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
            <Slideshow />
            <Footer />
          </>
        )} />
   </BrowserRouter>
  );   
}
export default App;




