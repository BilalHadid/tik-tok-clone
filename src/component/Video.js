import React, { useRef, useState } from "react";
import VideoFooter from "./VideoFooter";
import VideoSidebar from "./VideoSlidebar";
import "./video.css";

function Video({ url, channel, description, song, likes, messages, shares }) {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  const onVideoPress = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video__player"
        loop
        onClick={onVideoPress}
        ref={videoRef}
        src={url}
      ></video>
      {/* <img src={url} alt="bilal" width="100%" height="100%" /> */}
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar
        likes={likes}
        messages={messages}
        shares={shares}
        className="likeo"
      />
    </div>
  );
}

export default Video;
