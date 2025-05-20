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

const StyledLink = styled.a`
  font-weight: bold;
  text-decoration: underline;
  display: block;
  padding-top: 10px;
  text-align: left;
  color: white;
  text-decoration-color: currentColor;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

const AidI = () => {
  return (
    <Container>
      <Text id="AidI" mult={4} padding="0px 0 0px 0px" textAlign="center">
        Aid●I
      </Text>
      <ContentWrapper>
        <div className="pl-10">
          <Negative>
            <ResponsiveImage
              source={AidISite}
              padding={"50px 50px 50px 0px"}
              width="100%"
            />
          </Negative>
        </div>
        <div className="flex-1 flex items-center">
          <TextWrapper>
            <Text mult={0.5} padding="0px 0px 0px 0px" textAlign="left">
              Designed as a triage tool for therapy needs, Aid●I connects
              patients, therapists, and medical professionals. It was built
              specifically for regions where mental health care is lacking or
              stigmatized. The project featured extensive wireframes in Figma
              and included a formal presentation to showcase the concept.
            </Text>
            <StyledLink
              href="https://www.figma.com/proto/cdzCwdETRwIDhxOdwIkfuZ/Intern-Project---Final-Prototype-(Copy)?node-id=224-2&node-type=frame&t=76ta3OeqFqz8gu4U-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=224%3A26"
              target="_blank"
              rel="noopener noreferrer"
            >
              See more!
            </StyledLink>
          </TextWrapper>
        </div>
      </ContentWrapper>
    </Container>
  );
};

export default AidI;
