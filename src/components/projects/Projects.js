import React from "react";
import styled from "styled-components";

import Image from "../global/Image";
import Text from "../global/Text";
import fallenIpad from "../../assets/projects/fallen-ipad.png";

const ProjectsContainer = styled.div`
  background: linear-gradient(180deg, #465fc8 28.57%, #70bff8 100%);
  width: 100vw;
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
  font-size: calc(20px + 7vw);
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 30px 0 0 30px;
`;

const Negative = styled.div`
  margin-top: -50px;
`;

const Rect = styled.div`
  border: 2px solid #ffd543;
  background: #fff;
  width: fit-content;
  height: fit-content;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <HeaderContainer>
        <Header>Projects!</Header>
        <Image source={fallenIpad} padding={"50px 20px"} />
      </HeaderContainer>
      <Negative>
        <Text mult={5} padding={"0 0 0 60px"}>
          Fallen Star
        </Text>
        <Rect>
          <Text color={"#000"} mult={0.5}>
            <p>Interactive</p> Screen
          </Text>
        </Rect>
      </Negative>
    </ProjectsContainer>
  );
};

export default Projects;
