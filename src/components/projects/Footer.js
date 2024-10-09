import React from "react";
import styled from "styled-components";
import linkedinIcon from "../../assets/projects/linkedin icon.svg";
import phoneIcon from "../../assets/projects/iphone icon.svg";
import emailIcon from "../../assets/projects/email icon.svg";
import gitHubIcon from "../../assets/projects/github icon.svg";

const FooterContainer = styled.div`
  display: flex;
  background-color: transparent;
  justify-content: flex-start; // This will align items to the left
  align-items: flex-end; // This will align items to the bottom of the container
  margin-left: 5%; // This will move the container more towards the center
  height: 100px; // Increase this value to add more space above the buttons
`;

const Button = styled.img`
  cursor: pointer;
  width: 40px;
  height: 50px;
  padding-top: 20px; // Add padding to the top of each button
  margin-right: 10px; // Increased spacing between buttons

  &:last-child {
    margin-right: 0; // Remove right margin for the last button
  }
`;

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const Tooltip = styled.div`
  visibility: hidden;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -45px;
  opacity: 0;
  transition: opacity 0.3s;

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Button
        src={linkedinIcon}
        alt="LinkedIn"
        onClick={() =>
          window.open("https://www.linkedin.com/in/griffen-bengard")
        }
      />
      <TooltipContainer>
        <Button src={phoneIcon} alt="iPhone" />
        <Tooltip>(805)-990-6157</Tooltip>
      </TooltipContainer>
      <Button
        src={emailIcon}
        alt="email"
        onClick={() => window.open("mailto:griffen2020@gmail.com")}
      />
    </FooterContainer>
  );
};

export default Footer;
