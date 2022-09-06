import YouTube, { YouTubeProps } from "react-youtube";
import { useEffect } from "react";
export default function Background() {

var h = window.innerHeight
var w = window.innerWidth

  const opts: YouTubeProps["opts"] = {
    height: h,
    width: w,
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };



  return <YouTube videoId="1-iS7LArMPA" opts={opts} />;
}
