import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  background: linear-gradient(180deg, #465fc8 28.57%, #70bff8 100%);
  width: 100vw;
`;

const Header = styled.div`
  color: #fff;
  font-family: "Andika";
  font-size: 108px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <Header>Projects!</Header>
    </ProjectsContainer>
  );
};

export default Projects;
