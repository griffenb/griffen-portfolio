import React from "react";
import styled from "styled-components";
import profilePic from "../../assets/home/profile.svg";
import Menu from "./Menu.js";

import Projects from "./Projects.js";

const HomeContainer = styled.div`
  background: linear-gradient(0deg, #f2f5ce 0%, #f2f5ce 100%);
  overflow-x: hidden; // Add this to ensure no horizontal scroll
  width: auto;
  height: 120vh;
`;

const MenuContainer = styled.div`
  display: flex;
`;

const ProfPic = styled.img`
  position: absolute;
  height: 20%;
  width: auto;
  padding: 43px 0 0 60px;
`;
const About = styled.div`
  padding: 150px 0 0 126px;
  overflow-x: hidden; // Prevent horizontal overflow
`;

const Name = styled.div`
  color: #465fc8;
  font-family: "Andika";
  font-size: 92px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
  letter-spacing: 5px;
  padding-right: 0; // Ensure no excessive padding
  margin-right: 0; // Ensure no excessive margin
`;

const Subtitle = styled.div`
  color: #5a6695;
  font-family: "Andika";
  font-size: 52px;
  margin-top: -7px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-right: 0; // Ensure no excessive padding
  margin-right: 0; // Ensure no excessive margin
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
