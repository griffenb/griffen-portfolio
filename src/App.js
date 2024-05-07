import React, { useState } from "react";
import "./App.css";
import profilePic from "./assets/Profile Pic Group.svg";
import fallenStarHome from "./assets/Fallen Star Home Frame.svg";
import fallenStarHover from "./assets/Fallen Star Hover Page.svg";
import cloudGroup from "./assets/Cloud Group.svg";
import cloudGroupVid from "./assets/Clouds Group Video.mp4";
import CloudsGroupGif from "./assets/Clouds Group Gif.gif";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [cloudsHovered, setCloudsHovered] = useState(false);

  return (
    <div className="text">
      <div className="profile-img">
        <img src={profilePic} alt="Profile" className="profile-img" />
      </div>

      <div className="clouds">
        <gif
          autoPlay
          loop
          muted
          className="clouds-image"
          onMouseEnter={() => setCloudsHovered(true)}
          onMouseLeave={() => setCloudsHovered(false)}
        >
          <source src={CloudsGroupGif} type="gif" />
        </gif>
      </div>
      <div className="name">Griffen Bengard</div>
      <div className="sub">UX Design</div>
      <img
        src={isHovered ? fallenStarHover : fallenStarHome}
        alt="Fallen Star Home"
        className="fallen"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  );
}

export default App;
