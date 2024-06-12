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
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Arial', sans-serif; // Example font
    overflow-x: hidden; // Prevent horizontal scrolling at the body level
  }
`;
const ImageGallery = styled.div`
  display: flex;
  padding: 30px 0 0 0;
  flex-direction: row;
  justify-content: center; // Center items horizontally
  position: relative;
  width: 100%; // Ensure it doesn't exceed the viewport width
  overflow-x: hidden; // Hide any overflow on the x-axis
`;

//const ImageContainer = styled.div`
//  width: auto;
//  height: auto;
//  display: block;
//`;
const ImageContainer = styled.div`
  width: 100%; // Take full width of PaddingDiv
  height: 100%; // Take full height of PaddingDiv
  display: flex;
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
  position: relative; // Needed for absolute positioning of children
`;

// TODO 25%
//const PaddingDiv = styled.div`
//  width: 25%;
//`;
const PaddingDiv = styled.div`
  width: 25%;
  height: 45vh; // Example height, adjust as needed
  display: flex;
  justify-content: center;
  align-items: center;
`;
//const Project = styled.img`
//  width: 25%;
//  height: auto;
//  display: flex;
//  position: absolute;
//  z-index: 2;
//`;
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

//const Hover = styled.img`
//  width: 460px;
//  height: 300px;
//  z-index: 3;
//  display: flex;
//  position: absolute;
//  blob: ;
//`;
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

const Empty = styled.div`
  width: auto;
  height: auto;
  z-index: 3;
  display: flex;
  position: absolute;
`;

const projects = [
  { src: arlo, hoverSrc: arloHover, alt: "Arlo" },
  {
    src: fallen,
    hoverSrc: fallenHover,
    overlaySrc: cloudsFallen,
    alt: "Fallen Star",
  },
  { src: risen, hoverSrc: risenHover, alt: "Risen" },
  { src: shoply, hoverSrc: shoplyHover, alt: "Shoply" },
];

const ProjectContainer = ({ src, hoverSrc, overlaySrc, alt, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const isGif = src.endsWith(".gif"); // Check if the source ends with .gif

  return (
    <PaddingDiv>
      <ImageContainer>
        <Project
          key={index}
          src={isHovered ? hoverSrc : src}
          alt={alt}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          isGif={isGif} // Pass the isGif prop to styled component
        />
        {isHovered && overlaySrc && (
          <Hover
            key={index}
            src={overlaySrc}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          />
        )}
      </ImageContainer>
    </PaddingDiv>
  );
};

const Projects = () => {
  return (
    <ImageGallery className="place-content-stretch">
      {projects.map((project, index) => (
        <ProjectContainer {...project} key={index} />
      ))}
    </ImageGallery>
  );
};

export default Projects;
