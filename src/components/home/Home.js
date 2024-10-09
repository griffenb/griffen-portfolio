import React from "react";
import styled from "styled-components";
import profilePic from "../../assets/home/profile.svg";
import Menu from "./Menu.js";
import Footer from "../projects/Footer.js";

import Projects from "./Projects.js";

const HomeContainer = styled.div`
  background: #fcf6da;
  overflow-x: hidden; // Add this to ensure no horizontal scroll
  width: auto;
  height: 120vh;
`;

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  z-index: 2;
`;

const ProfPic = styled.img`
  position: absolute;
  height: 20%;
  width: auto;
  padding: 43px 0 0 60px;
`;
const About = styled.div`
  padding: 100px 0 0 126px; // Adjust padding as needed
  overflow-x: hidden;
  z-index: 1;
  top: 100px;
`;

const Name = styled.div`
  color: #324aa9;
  font-family: "Andika";
  font-size: calc(10px + 6vw);
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 5px;
  padding-right: 0;
  margin-right: 0;
  margin-top: 0px; // Added negative margin to push it up
`;

const Subtitle = styled.div`
  color: #40546d;
  font-family: "Andika";
  font-size: calc(7px + 3vw);
  margin-top: -7px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-right: 0; // Ensure no excessive padding
  margin-right: 0; // Ensure no excessive margin
`;
const ProjectsContainer = styled.div`
  width: auto;
  overflow-x: hidden;
`;

const Home = () => {
  return (
    <HomeContainer>
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <About id="about-text">
        {" "}
        {/* Ensure this ID is set */}
        <Name>Griffen Bengard</Name>
        <Subtitle>UX Design</Subtitle>
      </About>
      <ProjectsContainer>
        <Projects />
      </ProjectsContainer>
    </HomeContainer>
  );
};

export default Home;
