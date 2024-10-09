import React from "react";
import styled from "styled-components";

import Text from "../global/Text";
import Image from "../global/Image";
import ShoplySite from "../../assets/projects/Shoply Site.svg";

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
  width: 90vw; // Increased from 75vw
  max-width: 500px; // Increased from 370px
  z-index: -1;
`;

const TextWrapper = styled.div`
  margin-top: -70px; // Adjust this value to move the text up or down
  max-width: 600px; // Slightly reduced to accommodate larger image
  margin-left: 100px; // Reduced from 150px to balance layout
  margin-right: auto;
`;

const Shoply = () => {
  return (
    <Container>
      <Text mult={4} padding="40px 0 40px 0px" textAlign="center">
        Shop.ly
      </Text>
      <ContentWrapper>
        <div className="pl-10">
          <Negative>
            <Image
              source={ShoplySite}
              padding={"50px 0px 50px 50px"}
              width="100%" // Ensures image fills its container
            />
          </Negative>
        </div>
        <div className="flex-1 flex items-center">
          <TextWrapper>
            <Text mult={0.5} padding="0px 0px 0px 50px" textAlign="left">
              Shop.ly reimagines the shopping experience by introducing a
              zoom-based interface, enhanced with AI to provide spatial
              recommendations for clothing options, making the process more
              immersive and personalized. As part of a group of UCSD students
              that I led, we crafted an in-depth wireframe in Figma to bring
              this innovative design to life.
            </Text>
            <a
              href="https://youtu.be/chCpXOUz9-I"
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

export default Shoply;
