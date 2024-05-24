import React from "react";
import styled from "styled-components";
import profilePic from "../../assets/home/profile.svg";
import Menu from "./Menu.js";

import Projects from "./Projects.js";

const HomeContainer = styled.div`
  background: linear-gradient(0deg, #f2f5ce 0%, #f2f5ce 100%);
  width: 100vw;

  height: 120vh;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const ProfPic = styled.img`
  position: absolute;
  height: auto;
  width: auto;
  padding: 43px 0 0 60px;
`;

const About = styled.div`
  padding: 210px 0 0 126px;
`;

const Name = styled.div`
  color: #465fc8;
  font-family: "Andika";
  font-size: 108px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 5px;
`;

const Subtitle = styled.div`
  color: #5a6695;
  font-family: "Andika";
  font-size: 64px;
  margin-top: -7px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Home = () => {
  return (
    <HomeContainer>
      <ProfPic src={profilePic} />
      <MenuContainer>
        <Menu />
      </MenuContainer>
      <About>
        <Name>Griffen Bengard</Name>
        <Subtitle>UX Design</Subtitle>
      </About>
      <Projects />
    </HomeContainer>
  );
};

export default Home;
