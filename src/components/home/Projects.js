import React, { useState } from "react";
import styled from "styled-components";

import arlo from "../../assets/home/projects/arlo.svg";
import arloHover from "../../assets/home/projects/arlo-hover.gif";
import fallen from "../../assets/home/projects/fallen-star.svg";
import fallenHover from "../../assets/home/projects/fallen-hover.svg";
import cloudsFallen from "../../assets/home/projects/clouds-fallen.gif";
import risen from "../../assets/home/projects/risen.svg";
import risenHover from "../../assets/home/projects/risen-hover.gif";

const ImageGallery = styled.div`
  display: flex;
  padding: 30px 0 0 0;
  flex-direction: row;
  position: relative;
`;

const ImageContainer = styled.div`
  width: auto;
  height: auto;
  display: block;
`;

const PaddingDiv = styled.div`
  width: 33%;
`;

const Project = styled.img`
  width: 33%;
  height: auto;
  display: flex;
  position: absolute;
  z-index: 2;
`;

const Hover = styled.img`
  width: 460px;
  height: 300px;
  z-index: 3;
  display: flex;
  position: absolute;
  blob: ;
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
];

const ProjectContainer = ({ src, hoverSrc, overlaySrc, alt, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <PaddingDiv>
      <ImageContainer>
        <Project
          key={index}
          src={isHovered ? hoverSrc : src}
          alt={alt}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
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
