import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Footer from "../projects/Footer";
import Text from "../global/Text";

const Container = styled.div`
  position: relative;
  width: 100%;
  padding-top: 40px;
  padding-bottom: 60px;
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
    padding: 10px 20px;
  }
`;

const TextWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px 40px 20px;
  opacity: 0;
  transition: opacity 0.5s ease-in;

  &.fade-in {
    opacity: 1;
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 15px 30px 15px;
  }
`;

const HomeButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: ${(props) => props.mult * 16}px;
  padding: 10px 80px 30px 0;
  cursor: pointer;
  font-family: "Andika";
  font-style: "Bold";
  position: absolute;
  top: 40px;
  right: 0;

  @media (max-width: 768px) {
    font-size: ${(props) => props.mult * 12}px; /* Smaller text */
    padding: 5px 20px; /* Less padding */
    top: 10px; /* Moves it further up */
    right: 10px; /* Moves it further right */
  }
`;

const AboutMe = () => {
  const textRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

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

  const scrollToTop = () => {
    const startPosition = window.scrollY;
    const targetPosition = 0;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + distance * progress);
      if (progress < 1) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
  };

  return (
    <Container>
      <HomeButton onClick={scrollToTop} mult={2}>
        Home
      </HomeButton>
      <Text mult={3} padding="40px 0 40px 80px" textAlign="left">
        About Me
      </Text>
      <ContentWrapper>
        <TextWrapper ref={textRef} className={isVisible ? "fade-in" : ""}>
          <Text mult={0.5} textAlign="left">
            I'm a web designer and developer who graduated from University of
            California, San Diego in 2024 with a degree in Cognitive Science:
            Design and Interaction. I specialize in creative designs that allow
            for accessibility and usability by all users. Throughout my work and
            studies, I have become well versed in a plethora of coding languages
            as well as design software. Outside of work, I enjoy spending my
            free time doing escape rooms, designing shirts, and playing trivia.
          </Text>
        </TextWrapper>
      </ContentWrapper>
      <Footer />
    </Container>
  );
};

export default AboutMe;
