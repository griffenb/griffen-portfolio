import React from "react";
import styled from "styled-components";

import Text from "../global/Text";
import Image from "../global/Image";
import AidISite from "../../assets/projects/AidI Site.svg";

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

const AidI = () => {
  return (
    <Container>
      <Text id="AidI" mult={4} padding="40px 0 40px 0px" textAlign="center">
        {" "}
        {/* Added ID here */}
        Aid●I
      </Text>
      <ContentWrapper>
        <div className="pl-10">
          <Negative>
            <Image
              source={AidISite}
              padding={"50px 0px 50px 50px"}
              width="100%" // Ensures image fills its container
            />
          </Negative>
        </div>
        <div className="flex-1 flex items-center">
          <TextWrapper>
            <Text mult={0.5} padding="0px 0px 0px 50px" textAlign="left">
              Designed as a triage tool for therapy needs, Aid●I connects
              patients, therapists, and medical professionals. It was built
              specifically for regions where mental health care is lacking or
              stigmatized. The project featured extensive wireframes in Figma
              and included a formal presentation to showcase the concept.
            </Text>
            <a
              href="https://www.figma.com/proto/cdzCwdETRwIDhxOdwIkfuZ/Intern-Project---Final-Prototype-(Copy)?node-id=224-2&node-type=frame&t=76ta3OeqFqz8gu4U-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=224%3A26"
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

export default AidI;
