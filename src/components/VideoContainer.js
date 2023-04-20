import { useState } from "react";
import ProfileImg from "../assets/Images/ProfileImg.jpg";

const VideoContainer = () => {
  let [isAsideHover, setIsAsideHover] = useState(false);
  return (
    <div
      className="bg-purple-300 h-[30vh]"
      onMouseEnter={() => setIsAsideHover(!isAsideHover)}
      onMouseLeave={() => setIsAsideHover(!isAsideHover)}
    >
      <h1 className="text-center">
        Video Cards - {isAsideHover ? "True" : "False"}
      </h1>
    </div>
  );
};

export default VideoContainer;
