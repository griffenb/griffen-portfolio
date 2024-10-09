import React from "react";
import styled from "styled-components";

import Text from "../global/Text";
import Image from "../global/Image";
import RisenSite from "../../assets/projects/Risen Site.svg";

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

const Risen = () => {
  return (
    <Container>
      <Text mult={4} padding="40px 0 40px 0px" textAlign="center">
        Risen Esports
      </Text>
      <ContentWrapper>
        <div className="pl-10">
          <Negative>
            <Image
              source={RisenSite}
              padding={"50px 0px 50px 50px"}
              width="100%" // Ensures image fills its container
            />
          </Negative>
        </div>
        <div className="flex-1 flex items-center">
          <TextWrapper>
            <Text mult={0.5} padding="0px 0px 0px 50px" textAlign="left">
              As one of the larger amateur tournament organizers for League of
              Legends, Risen Esports has made a name for itself in the gaming
              community. Through my work there, I managed the social media
              accounts and contributed to website development, leveraging CSS,
              Java, and HTML to enhance the user experience.
            </Text>
            <a
              href="https://www.risenesports.com/"
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

export default Risen;
