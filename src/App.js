import React, { useState } from "react";
import Home from "./components/home/Home.js";
// import profilePic from "./assets/Profile Pic Group.svg";
// import fallenStarHome from "./assets/Fallen Star Home Frame.svg";
// import fallenStarHover from "./assets/Fallen Star Hover Page.svg";
// import cloudGroup from "./assets/Cloud Group.svg";
// import cloudGroupVid from "./assets/Clouds Group Video.mp4";
// import CloudsGroupGif from "./assets/Clouds Group Gif.gif";

function App() {
  return <Home></Home>;
  // const [isHovered, setIsHovered] = useState(false);
  // const [cloudsHovered, setCloudsHovered] = useState(false);
  // return (
  //   <div className="text">
  //     <div className="profile-img">
  //       <img src={profilePic} alt="Profile" className="profile-img" />
  //     </div>
  //     <div className="clouds">
  //       {!isHovered && (
  //         <img
  //           src={cloudGroup}
  //           alt="Cloud Group"
  //           className="clouds-image"
  //           onMouseEnter={() => setCloudsHovered(true)}
  //           onMouseLeave={() => setCloudsHovered(false)}
  //         />
  //       )}
  //     </div>
  //     <div className="name">Griffen Bengard</div>
  //     <div className="sub">UX Design</div>
  //     <div
  //       onMouseEnter={() => setIsHovered(true)}
  //       onMouseLeave={() => setIsHovered(false)}
  //       className="image-container"
  //     >
  //       {/* Base Image */}
  //       <img
  //         src={fallenStarHome}
  //         alt="Fallen Star Home"
  //         className="base-image"
  //       />
  //       {/* Overlay Images */}
  //       {isHovered && (
  //         <div className="overlay-images">
  //           {CloudsGroupGif && (
  //             <img
  //               src={CloudsGroupGif}
  //               alt="Clouds Group Gif"
  //               className="clouds-group-gif overlay-image"
  //             />
  //           )}
  //           {fallenStarHover && (
  //             <img
  //               src={fallenStarHover}
  //               alt="Fallen Star Hover"
  //               className="fallen-star-hover overlay-image"
  //             />
  //           )}
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );
}

export default App;
