import React, { useEffect, useRef, useState } from "react";
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
  opacity: 0; // Start hidden
  transition: opacity 0.5s ease-in; // Keep duration at 0.5s for the fade transition
  &.fade-in {
    opacity: 1; // Fade in effect
  }
`;

const Shoply = () => {
  const textRef = useRef(null); // Reference for the text wrapper
  const [isVisible, setIsVisible] = useState(false); // State to track visibility

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Set to true when in view
          observer.disconnect(); // Stop observing after it becomes visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (textRef.current) {
      observer.observe(textRef.current); // Start observing the text wrapper
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current); // Clean up observer
      }
    };
  }, []);

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
          <TextWrapper ref={textRef} className={isVisible ? "fade-in" : ""}>
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
