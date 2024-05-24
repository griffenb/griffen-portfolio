import React, { useState } from "react";
import styled from "styled-components";
import optionsIcon from "../../assets/home/options.svg";
import email from "../../assets/home/email.svg";
import linkedin from "../../assets/home/linkedin.svg";

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

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MenuContainer className="space-y-4">
      <Button src={optionsIcon} alt="Menu" onClick={() => setIsOpen(!isOpen)} />
      {isOpen && (
        <DropdownContent>
          <DropdownItem href="#">Link 1</DropdownItem>
          <DropdownItem href="#">Link 2</DropdownItem>
          <DropdownItem href="#">Link 3</DropdownItem>
        </DropdownContent>
      )}
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
    </MenuContainer>
  );
};

export default Menu;
