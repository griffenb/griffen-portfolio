import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import Text from "../global/Text";
import Image from "../global/Image";
import PokeSite from "../../assets/projects/Poke Screen.svg";

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
    align-items: flex-start;
  }
`;
const Negative = styled.div`
  margin-top: -50px;
  width: 90vw;
  max-width: 500px;
  z-index: -1;

  @media (max-width: 768px) {
    width: 80vw; /* Reduced width on mobile */
    margin-top: 10px; /* Reduced spacing on mobile */
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  padding: 50px 0px 50px 50px; /* Default desktop padding */

  @media (max-width: 768px) {
    padding: 0px 0; /* Reduced padding only on mobile */
  }

  img {
    width: 100%; /* Default width */

    @media (max-width: 768px) {
      width: 70%; /* Reduce image size on mobile */
    }
  }
`;

const TextWrapper = styled.div`
  margin-top: -70px;
  max-width: 600px;
  margin-left: 100px;
  margin-right: auto;
  opacity: 0;
  transition: opacity 0.5s ease-in;

  &.fade-in {
    opacity: 1;
  }

  @media (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
    margin-top: 20px;
    text-align: center;
  }
`;

const Poke = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  // Detect screen size changes to update padding dynamically
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container>
      <Text mult={4} padding="0px 0px 0px 0px" textAlign="center">
        PokeWord Works
      </Text>
      <ContentWrapper>
        <div className="pl-10">
          <Negative>
            <ImageWrapper>
              <Image source={PokeSite} width="100%" />
            </ImageWrapper>
          </Negative>
        </div>
        <div className="flex-1 flex items-center">
          <TextWrapper ref={textRef} className={isVisible ? "fade-in" : ""}>
            <Text
              mult={0.5}
              padding={isMobile ? "20px 0px 0px 0px" : "70px 0px 0px 0px"}
              textAlign="left"
            >
              PokeWord Works is a gamified spelling tool developed in
              collaboration with a teaching assistant at an underserved San
              Diego elementary school, designed to support third graders in
              independently practicing spelling. As a spin-off of the
              classroom’s existing Word-Works system, it introduces automated
              pronunciation and professor-augmentable spelling lists, allowing
              for tailored learning without requiring constant supervision. The
              tool was built with a Pokémon theme to match the classroom’s
              existing decor, making the experience more fun and familiar for
              students while reinforcing their engagement with the material.
            </Text>
            <a
              href="https://rkwhitlock.github.io/word-works/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontWeight: "bold",
                textDecoration: "underline",
                display: "block",
                padding: "10px 0 30px 0px",
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

export default Poke;
