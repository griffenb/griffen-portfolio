import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import optionsIcon from "../../assets/projects/Option Bars.svg";
import email from "../../assets/projects/email icon new.svg";
import linkedin from "../../assets/projects/linkedin icon new.svg";
import phoneIcon from "../../assets/projects/Phone Icon New.svg";

const MenuContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  right: 2vw;
  top: 5vh;
  gap: 10px;

  @media (min-width: 769px) {
    /* Desktop only */
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    width: 100%;
    top: 2vh;
    left: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
`;

const ButtonColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (min-width: 769px) {
    align-items: center;
    order: 2;
    margin-top: 10px;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    position: static;
    justify-content: space-evenly;
    flex-grow: 1;
  }
`;

const Button = styled.img`
  cursor: pointer;
  width: 31px;
  height: 38px;

  @media (max-width: 768px) {
    width: 28px;
    height: 34px;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 20px;
  right: 2vw;
  width: 200px;
  background: #324aa9;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 99999;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  padding: 15px;

  p {
    color: white;
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
  }

  p:hover {
    background-color: #566ecd;
    border-radius: 5px;
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
  bottom: 0%;
  left: -300%;
  opacity: 0;
  transition: opacity 0.3s;

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const MenuButton = styled.img`
  cursor: pointer;
  width: 35px;
  height: 35px;

  @media (max-width: 768px) {
    display: none; /* Hides menu button on mobile */
  }
`;

const scrollDownPercentage = (percentage) => {
  const totalHeight = document.body.scrollHeight; // Get the total height of the document
  const scrollToPosition = totalHeight * (percentage / 100); // Calculate the scroll position
  const startPosition = window.scrollY; // Get the current scroll position
  const distance = scrollToPosition - startPosition; // Calculate the distance to scroll
  const duration = 500; // Duration in milliseconds
  let startTime = null;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1); // Calculate progress
    window.scrollTo(0, startPosition + distance * progress); // Scroll to the calculated position
    if (progress < 1) requestAnimationFrame(animation); // Continue the animation
  };

  requestAnimationFrame(animation); // Start the animation
};

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);
  const buttonClickedRef = useRef(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !buttonClickedRef.current
      ) {
        setIsOpen(false);
      }
      buttonClickedRef.current = false;
    };

    const handleScroll = () => {
      setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <MenuContainer>
      <ButtonColumn>
        <Button
          src={email}
          alt="Email"
          onClick={() => window.open("mailto:griffen2020@gmail.com")}
        />
        <Button
          src={linkedin}
          alt="LinkedIn"
          onClick={() =>
            window.open("https://www.linkedin.com/in/griffen-bengard")
          }
        />
        <TooltipContainer>
          <Button
            src={phoneIcon}
            alt="Phone"
            onClick={() => window.open("tel:8059906157")}
          />
          <Tooltip>(805)-990-6157</Tooltip>
        </TooltipContainer>
      </ButtonColumn>
      <MenuButton
        src={optionsIcon}
        alt="Menu"
        onMouseDown={() => {
          buttonClickedRef.current = true;
          setIsOpen((prev) => !prev);
        }}
      />
      <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
        {isOpen && (
          <>
            <p onClick={() => scrollDownPercentage(10)}>My Projects 😎</p>
            <p onClick={() => scrollDownPercentage(21)}>Fallen Star 🏠🌟</p>
            <p onClick={() => scrollDownPercentage(39.5)}>Shop.ly 🛒</p>
            <p onClick={() => scrollDownPercentage(53.2)}>Aid●I 🤝</p>
            <p onClick={() => scrollDownPercentage(65.5)}>Risen Esports 🎮</p>
            <p onClick={() => scrollDownPercentage(100)}>About Me</p>
          </>
        )}
      </SidebarContainer>
    </MenuContainer>
  );
};

export default Menu;
