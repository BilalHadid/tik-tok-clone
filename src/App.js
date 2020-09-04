import React from "react";
import Video from "./component/Video";
import "./App.css";
import vid1 from "./videos/4.mp4";
import vid2 from "./videos/2.mp4";
import vid3 from "./videos/3.mp4";

function App() {
  return (
    <div className="app">
      <div className="app__videos">
        <Video
          url={vid1}
          channel="bilal.official"
          song="At remix by dj hartz sharma .."
          likes="800"
          messages="1.5K"
          description="Now guyz Let's see my car"
          shares="55"
        />
        <Video
          url={vid2}
          channel="zain.official"
          song="nice Song"
          likes="353"
          messages="3.5K"
          description="Hello Wow Look great"
          shares="55"
        />
        <Video
          url={vid3}
          channel="ehsan.official"
          song="nice Song"
          likes="900"
          messages="2.5K"
          description="Hello Wow Look great"
          shares="55"
        />
      </div>
    </div>
  );
}

export default App;
