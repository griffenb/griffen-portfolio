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
            <Text mult={0.5} padding="0px 0px 0px 50px" textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Commodo elit at imperdiet dui accumsan sit amet nulla. Sit amet
              tellus cras adipiscing enim eu. Vitae tortor condimentum lacinia
              quis vel eros donec ac odio. Consequat semper viverra nam libero
              justo laoreet sit. Elementum curabitur vitae nunc sed velit
              dignissim sodales ut.
            </Text>
          </TextWrapper>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default Fallen;
