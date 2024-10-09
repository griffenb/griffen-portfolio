import React from "react";
import styled from "styled-components";

import Text from "../global/Text";
import Image from "../global/Image";
import fallenIpad from "../../assets/projects/fallen-ipad.png";
import kiosk from "../../assets/projects/Kiosk Group.svg";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 40px;
  overflow: hidden;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 20px;
`;

const Negative = styled.div`
  margin-top: -50px;
  width: 75vw;
  max-width: 370px;
  z-index: -1;
`;

const TextWrapper = styled.div`
  margin-top: -20px; // Adjust this value to move the text up or down
  max-width: 700px; // Adjust this value to change the width of the text box
  margin-left: 150px;
  margin-right: auto;
`;

const Fallen = () => {
  return (
    <Container>
      <Text mult={4} padding="40px 0 0px 0px" textAlign="center">
        Fallen Star
      </Text>
      <div
        style={{
          position: "absolute",
          top: "60px",
          right: "100px",
          width: "250px",
          zIndex: 1,
        }}
      >
        <Image source={fallenIpad} />
      </div>
      <ContentWrapper>
        <div className="pl-10">
          <Negative>
            <Image source={kiosk} padding={"50px 0px 50px 50px"} />
          </Negative>
        </div>
        <div className="flex-1 flex items-center">
          <TextWrapper>
            <Text mult={0.5} padding="0px 0px 0px 50px" textAlign="left">
              Fallen Star takes the UCSD art installation to the next level with
              a fully functional kiosk demo that brings the experience to life.
              Featuring hand-drawn animations, an in-depth wireframe, and even
              some old-fashioned carpentry, the project was built in Figma to
              match the immersive aesthetic of the original installation. I led
              the effort alongside a small team to create this enhanced
              experience.
            </Text>
            <a
              href="https://www.figma.com/proto/kYvwFweYaz9PCHV5PfdICI/DSGN100-A4-(Copy)?node-id=1-3&starting-point-node-id=1%3A3&t=TLad4R1xg1U0P4Xu-1"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                display: "block", // Ensures it appears on a new line
                padding: "10px 0 0 50px",
                textAlign: "left",
                color: "white", // Set text color to white
                textDecorationColor: "currentColor",
              }}
            >
              See more!
            </a>
          </TextWrapper>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Fallen;
