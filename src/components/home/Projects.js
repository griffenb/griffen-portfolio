import React, { useState } from "react";
import styled from "styled-components";

import arlo from "../../assets/home/projects/arlo.svg";
import arloHover from "../../assets/home/projects/arlo-hover.gif";
import fallen from "../../assets/home/projects/fallen-star.svg";
import fallenHover from "../../assets/home/projects/fallen-hover.svg";
import cloudsFallen from "../../assets/home/projects/clouds-fallen.gif";
import risen from "../../assets/home/projects/risen.svg";
import risenHover from "../../assets/home/projects/risen-hover.gif";
import shoply from "../../assets/home/projects/Shoply Group.svg";
import shoplyHover from "../../assets/home/projects/shoply-hover.gif";
import aidi from "../../components/projects/AidI";
import fallenstar from "../../components/projects/Fallen";
import risenscroll from "../../components/projects/Risen";
import shoplyscroll from "../../components/projects/Shoply";

const ImageGallery = styled.div`
  display: flex;
  padding: 30px 0 0 0;
  flex-direction: row;
  justify-content: center; // Center items horizontally
  position: relative;
  width: 100%; // Ensure it doesn't exceed the viewport width
  overflow-x: hidden; // Hide any overflow on the x-axis
`;

const PaddingDiv = styled.div`
  width: 25%;
  height: 45vh; // Example height, adjust as needed
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.button`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const Project = styled.img`
  width: ${({ isGif }) => (isGif ? "350px" : "350px")};
  height: ${({ isGif }) => (isGif ? "250px" : "250px")};
  object-fit: ${({ isGif }) =>
    isGif ? "cover" : "contain"}; // 'cover' for GIFs, 'contain' for SVGs
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const Hover = styled.img`
  width: 460px;
  height: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); // Center the image
  z-index: 3;
  display: flex;
`;

const projects = [
  {
    src: arlo,
    hoverSrc: arloHover,
    alt: "Arlo",
    keyword: "AidI", // Keyword for scrolling to the Aid●I text
  },
  {
    src: fallen,
    hoverSrc: fallenHover,
    overlaySrc: cloudsFallen,
    alt: "Fallen Star",
    keyword: "FallenStar", // Keyword for scrolling
  },
  {
    src: risen,
    hoverSrc: risenHover,
    alt: "Risen",
    keyword: "Risen", // Keyword for scrolling
  },
  {
    src: shoply,
    hoverSrc: shoplyHover,
    alt: "Shoply",
    keyword: "Shoply", // Keyword for scrolling
  },
];

const ProjectContainer = ({ src, hoverSrc, overlaySrc, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isGif = src.endsWith(".gif");

  const scrollDownPercentage = (percentage) => {
    const totalHeight = document.body.scrollHeight; // Get the total height of the document
    const scrollToPosition = totalHeight * (percentage / 100); // Calculate the scroll position
    const startPosition = window.scrollY; // Get the current scroll position
    const distance = scrollToPosition - startPosition; // Calculate the distance to scroll
    const duration = 500; // Duration in milliseconds
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // Calculate progress
      window.scrollTo(0, startPosition + distance * progress); // Scroll to the calculated position
      if (progress < 1) requestAnimationFrame(animation); // Continue the animation
    };

    requestAnimationFrame(animation); // Start the animation
  };

  return (
    <PaddingDiv>
      <ImageContainer
        onClick={() => {
          if (alt === "Arlo") scrollDownPercentage(56.2);
          if (alt === "Fallen Star") scrollDownPercentage(24);
          if (alt === "Risen") scrollDownPercentage(69.5);
          if (alt === "Shoply") scrollDownPercentage(41.5);
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Project src={isHovered ? hoverSrc : src} alt={alt} isGif={isGif} />
        {isHovered && overlaySrc && (
          <Hover src={overlaySrc} onClick={() => scrollDownPercentage(50)} /> // Ensure the hover image also triggers the scroll
        )}
      </ImageContainer>
    </PaddingDiv>
  );
};

const Projects = () => {
  return (
    <>
      <ImageGallery className="place-content-stretch">
        {projects.map((project, index) => (
          <ProjectContainer {...project} key={index} />
        ))}
      </ImageGallery>
      {/* Existing sections with corresponding IDs */}
      <div id="AidI">
        <h2></h2> {/* Added ID here */}
        {/* Aid-I project content goes here */}
      </div>
      <div id="FallenStar">
        <h2></h2>
        {/* Fallen Star project content goes here */}
      </div>
      <div id="Risen">
        <h2></h2>
        {/* Risen project content goes here */}
      </div>
      <div id="Shoply">
        <h2></h2>
        {/* Shoply project content goes here */}
      </div>
    </>
  );
};

export default Projects;
