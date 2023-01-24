import react from 'react';
import './App.css';
import VideoPlayer from './Videoplayer';
import Anime from './Anime'

function App() {
  return (
    <div className="App">
      <h1>How to kill yourself ?</h1>

      <h2> So, you wanna kill yourself? Let me guess.... You want to escape from all the feelings? All the bad feelings you are feeling right?<br></br>
      So let's assume you killed yourself thinkig you will get relief. <br></br>
      Relief from all the bad feelings you are feeling.
      But I have a bad news for you buddy. 'Relief' is a feeling and once you kill yourself 
      you wont feel anything so sorry. <br></br>
      <br></br>
      So bro life sucks honestly but killing yourself sucks more
      </h2> 

      <h2>
        I also wanna kill myself but if I die the world will be a peaceful place.
        <br></br>
        So, let's live and destroy pussies. 
      </h2>

      <img src={require('../src/blackbeard-one-piece.gif')} alt="loading..." />


      <h2>
      But, if you still wanan die then I have one request.
        <br></br>
        Since I have no friends to share I want you to watch the links below and let me know.
      </h2>


      <div>  
        <h2>Watch these or imma curse you bad boy. After that, decide whether to die or not</h2>  
              <ul><a href="https://zoro.to/a-silent-voice-11?ref=search"> A Silent Voice</a></ul>  
              <ul><a href="https://zoro.to/weathering-with-you-111?ref=search"> Weathering with you</a></ul>  
              <ul><a href="https://zoro.to/your-name-10?ref=search">Your Name</a></ul>  
    </div>  

    <div>  
        <h2>If you want more then check these: </h2>   
          <ul><a href="https://zoro.to/death-note-60?ref=search"> Death Note</a></ul>  
              <ul><a href="https://zoro.to/one-piece-100?ref=search"> One Piece</a></ul>  
              <ul><a href="https://zoro.to/naruto-677?ref=search"> Naruto</a></ul>  
           
    </div>  
    <h2> If you still wanna die, GOODLUCK</h2>
    </div>

    

  );
}

export default App;
