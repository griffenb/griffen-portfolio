import React, { useState, useEffect } from "react";
import styled from "styled-components";

import arlo from "../../assets/home/projects/arlo.svg";
import arloHover from "../../assets/home/projects/arlo-hover.gif";
import fallen from "../../assets/home/projects/fallen-star.svg";
import fallenHover from "../../assets/home/projects/fallen-hover.svg";
import cloudsFallen from "../../assets/home/projects/clouds-fallen.gif";
import risen from "../../assets/home/projects/risen.svg";
import risenHover from "../../assets/home/projects/risen-hover.gif";
import poke from "../../assets/home/projects/pokereese.svg";
import pokeHover from "../../assets/home/projects/pokereese hover.gif";

const ImageGallery = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  overflow-x: hidden;
  padding: 30px 0 0 0;

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    padding: 10px;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
  }
`;

const PaddingDiv = styled.div`
  width: 25%;
  height: 45vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px 0;
  }
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
  width: ${(props) => (props.isPoke ? "400px" : "350px")};
  height: ${(props) => (props.isPoke ? "300px" : "250px")};
  object-fit: contain;
  position: relative;
  z-index: 2;
  transform: ${(props) => (props.isPoke ? "translateX(-50px)" : "none")};

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 10px;
    transform: none;
  }
`;

const Hover = styled.img`
  width: ${(props) => (props.isPoke ? "520px" : "460px")};
  height: ${(props) => (props.isPoke ? "340px" : "300px")};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: ${(props) =>
    props.isPoke ? "translate(-60%, -50%)" : "translate(-50%, -50%)"};
  z-index: 3;
  display: flex;

  @media (max-width: 768px) {
    display: none;
  }
`;

const projects = [
  {
    src: arlo,
    hoverSrc: arloHover,
    alt: "Arlo",
    keyword: "AidI",
    scrollTo: 53.2,
  },
  {
    src: fallen,
    hoverSrc: fallenHover,
    overlaySrc: cloudsFallen,
    alt: "Fallen Star",
    keyword: "FallenStar",
    scrollTo: 21,
  },
  {
    src: risen,
    hoverSrc: risenHover,
    alt: "Risen",
    keyword: "Risen",
    scrollTo: 65.5,
  },
  {
    src: poke,
    hoverSrc: pokeHover,
    alt: "poke",
    keyword: "poke",
    scrollTo: 39.5,
  },
];

const scrollDownPercentage = (percentage) => {
  const totalHeight = document.body.scrollHeight;
  const scrollToPosition = totalHeight * (percentage / 100);
  const startPosition = window.scrollY;
  const distance = scrollToPosition - startPosition;
  const duration = 500;
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * progress);
    if (progress < 1) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

const ProjectContainer = ({
  src,
  hoverSrc,
  overlaySrc,
  alt,
  scrollTo,
  keyword,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isPoke = keyword === "poke";

  return (
    <PaddingDiv>
      <ImageContainer
        onClick={() => scrollDownPercentage(scrollTo)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Project
          src={isMobile ? src : isHovered ? hoverSrc : src}
          alt={alt}
          isPoke={isPoke}
        />
        {isHovered && overlaySrc && !isMobile && (
          <Hover src={overlaySrc} isPoke={isPoke} />
        )}
      </ImageContainer>
    </PaddingDiv>
  );
};

const Projects = () => {
  return (
    <ImageGallery>
      {projects.map((project, index) => (
        <ProjectContainer {...project} key={index} />
      ))}
    </ImageGallery>
  );
};

export default Projects;
