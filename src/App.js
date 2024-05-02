import React from "react";
import "./App.css";
import profilePic from "./components/Profile Pic Group.svg"; // Corrected import path
import fallenStarHome from "./components/Fallen Star Home Frame.svg";

function App() {
  return (
    <div className="App">
      <div className="img-overlay-wrap">
        <img src={profilePic} alt="Profile" className="profile-img" />
      </div>
      <div className="name">Griffen Bengard</div>
      <div className="sub">UX Design</div>
      <div className="fallen">
        <img src={fallenStarHome} alt="Fallen Star Home" className="fallen" />
      </div>
    </div>
  );
}

export default App;
