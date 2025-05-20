import React, { useEffect, useRef, useState } from "react";
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Negative = styled.div`
  margin-top: -50px;
  width: 90vw;
  max-width: 500px;
  z-index: -1;
`;

const ResponsiveImage = styled(Image)`
  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TextWrapper = styled.div`
  margin-top: -70px;
  max-width: 600px;
  margin-left: 100px;
  margin-right: auto;

  @media (max-width: 768px) {
    margin: 0;
    padding: 20px;
    text-align: center;
  }
`;

const Risen = () => {
  return (
    <Container>
      <Text id="Risen" mult={4} padding="0px 0 20px 0px" textAlign="center">
        Risen Esports
      </Text>
      <ContentWrapper>
        <div className="pl-10">
          <Negative>
            <ResponsiveImage
              source={RisenSite}
              padding={"30px 50px 30px 0px"}
              width="100%"
            />
          </Negative>
        </div>
        <div className="flex-1 flex items-center">
          <TextWrapper>
            <Text mult={0.5} padding="0px 0px 0px 0px" textAlign="left">
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
                display: "block",
                padding: "10px 0 0 0px",
                textAlign: "left",
                color: "white",
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
