import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import optionsIcon from "../../assets/projects/Option Bars.svg";
import email from "../../assets/projects/email icon new.svg";
import linkedin from "../../assets/projects/linkedin icon new.svg";
import closeIcon from "../../assets/projects/Close Button.svg";
import phoneIcon from "../../assets/projects/Phone Icon New.svg"; // Import phone icon

const MenuContainer = styled.div`
  position: absolute;
  display: inline-block;
  right: 30px;
  top: 43px;
`;

const Button = styled.img`
  cursor: pointer;
  width: 31px;
  height: 38px;
`;

const DropdownItem = styled.a`
  font-family: "Andika";
  color: white; // Changed font color to white
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #566ecd;
  }
`;

const SidebarContainer = styled.div`
  position: fixed;
  top: 20px;
  left: calc(100% - 250px);
  width: 11%;
  height: 45%;
  background: #324aa9;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
  z-index: 3;
  border-radius: 10px; // Added rounded corners
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
  left: -400%;
  margin-left: 0px;
  opacity: 0;
  transition: opacity 0.3s;

  ${TooltipContainer}:hover & {
    visibility: visible;
    opacity: 1;
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

const Menu = ({ setIsOpen }) => {
  const [isOpen, setLocalIsOpen] = useState(false);
  const sidebarRef = useRef(null); // Create a ref for the sidebar
  const buttonClickedRef = useRef(false); // Ref to track button click

  // Effect to lock/unlock body scroll
  useEffect(() => {
    // Remove the scroll lock effect
    // document.body.style.overflow = "hidden"; // Prevent scrolling
    // document.body.style.overflow = "unset"; // Restore scrolling
  }, [isOpen]);

  // Effect to close sidebar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setLocalIsOpen(false); // Close sidebar on scroll
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Effect to close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !buttonClickedRef.current
      ) {
        setLocalIsOpen(false); // Close sidebar if clicked outside and button wasn't clicked
      }
      buttonClickedRef.current = false; // Reset the button click state
    };

    // Add click event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <MenuContainer className="space-y-4">
      <Button
        src={optionsIcon}
        alt="Menu"
        onMouseDown={() => {
          buttonClickedRef.current = true; // Set the button clicked state
          setLocalIsOpen((prev) => !prev); // Toggle sidebar visibility
        }}
      />
      <SidebarContainer ref={sidebarRef} isOpen={isOpen}>
        {isOpen && (
          <>
            <p style={{ color: "white", padding: "20px" }}>My Projects 😎</p>{" "}
            {/* Added text above the options */}
            <DropdownItem href="#" onClick={() => scrollDownPercentage(24)}>
              <p>Fallen Star 🏠🌟</p>
            </DropdownItem>
            <DropdownItem href="#" onClick={() => scrollDownPercentage(41.5)}>
              <p>Shop.ly 🛒</p>
            </DropdownItem>
            <DropdownItem href="#" onClick={() => scrollDownPercentage(56.2)}>
              <p>Aid●I 🤝</p>
            </DropdownItem>
            <DropdownItem href="#" onClick={() => scrollDownPercentage(69.5)}>
              <p>Risen Esports 🎮</p>
            </DropdownItem>
            <DropdownItem href="#" onClick={() => scrollDownPercentage(100)}>
              <p>About Me </p>
            </DropdownItem>
          </>
        )}
      </SidebarContainer>
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
          onClick={() => window.open("tel:8059906157")} // Add phone functionality
        />
        <Tooltip>(805)-990-6157</Tooltip>
      </TooltipContainer>
    </MenuContainer>
  );
};

export default Menu;
