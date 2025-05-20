import React from "react";
import styled from "styled-components";
import profilePic from "../../assets/home/profile.svg";
import uxDesignText from "../../assets/home/ux design text new.svg";
import Menu from "./Menu.js";
import Footer from "../projects/Footer.js";
import Projects from "./Projects.js";

const HomeContainer = styled.div`
  background: #fcf6da;
  overflow-x: hidden;
  width: 100%;
  min-height: 100vh;
`;

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
`;

const ProfPic = styled.img`
  position: absolute;
  height: auto;
  max-width: 20%;
  padding: 10vw 0 0 10vw;

  @media (max-width: 768px) {
    max-width: 40%;
    padding: 5vw 0 0 5vw;
  }
`;

const About = styled.div`
  padding: 12vh 8vw 0 8vw;
  overflow-x: hidden;
  position: relative;

  @media (max-width: 768px) {
    padding: 15vh 5vw 0 5vw;
    text-align: center;
  }
`;

const Name = styled.div`
  color: #324aa9;
  font-family: "Andika";
  font-size: calc(14px + 6vw);
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 3px;

  @media (max-width: 768px) {
    font-size: calc(12px + 5vw);
    text-align: center;
  }
`;

const UxDesignSVG = styled.img`
  width: 20vw; /* Scales with viewport width */
  max-width: 350px; /* Prevents it from being too large */
  height: auto;
  display: block;

  @media (max-width: 768px) {
    width: 60%; /* Larger size on mobile */
    max-width: 250px;
    margin: 10px auto; /* Centers it on mobile */
  }
`;

const ProjectsContainer = styled.div`
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 5vw;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <About id="about-text">
        <Name>Griffen Bengard</Name>
        <UxDesignSVG src={uxDesignText} alt="UX Design" />
      </About>
      <ProjectsContainer>
        <Projects />
      </ProjectsContainer>
    </HomeContainer>
  );
};

export default Home;
