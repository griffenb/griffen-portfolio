import React from "react";
import "./App.css";
import profilePic from "./assets/Profile Pic Group.svg";
import fallenStarHome from "./assets/Fallen Star Home Frame.svg";
import cloudGroup from "./assets/Cloud Group.svg";

function App() {
  return (
    <div className="text">
      <div className="profile-img">
        <img src={profilePic} alt="Profile" className="profile-img" />
      </div>

      <div className="clouds">
        <img src={cloudGroup} alt="Cloud Group" />
      </div>
      <div className="name">Griffen Bengard</div>
      <div className="sub">UX Design</div>
      <img src={fallenStarHome} alt="Fallen Star Home" className="fallen" />
    </div>
  );
}

export default App;
