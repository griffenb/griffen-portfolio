import React from "react";
import styled from "styled-components";

import Image from "../global/Image";
import Text from "../global/Text";
import fallenIpad from "../../assets/projects/fallen-ipad.png";

import HorizontalLine from "./HorizontalLine.js";

import AboutMe from "./About Me.js";
import AidI from "./AidI.js";
import Fallen from "./Fallen.js";
import Risen from "./Risen.js";
import Shoply from "./Shoply.js";

const ProjectsContainer = styled.div`
  background: linear-gradient(180deg, #294361 0%, #35597e 100%);
  width: auto;
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.div`
  color: #fff;
  font-family: "Andika";
  font-size: calc(20px + 4.5vw);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 0 0 0 60px;
  margin-top: 40px;
`;

const Negative = styled.div`
  margin-top: -50px;
`;

const projects = [<Shoply />, <AidI />, <Risen />, <AboutMe />];

const Projects = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <Header>Projects!</Header>
      </HeaderContainer>
      <Negative>
        <Fallen />
      </Negative>
      {projects.map((project, index) => (
        <div key={index}>
          <HorizontalLine />
          {project}
        </div>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
