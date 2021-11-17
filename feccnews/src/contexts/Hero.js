import React from 'react';
import styled from 'styled-components';
import newImage from '../images/newsimage.svg';
import SvgComponent from '../components/SvgComponent';

const Hero = () => {
  return (
    <StyledHero>
      <GetStarted>
        <GetStartedLeft>
          <GetStartedLeftHeading>
            Here You Get The Latest News...
          </GetStartedLeftHeading>
          <GetStartedParagraph>
            Get Exclusive, Get Inspired!!!
          </GetStartedParagraph>
        </GetStartedLeft>
        <GetStartedRight>
          <GetStartedRightImage src={newImage} alt="newImage" />
          <SvgComponent />
        </GetStartedRight>
      </GetStarted>
    </StyledHero>
  );
};
const StyledHero = styled.div`
  height: 90vh;
  margin-top: 5rem;

  @media (max-width: 1350px) {
    height: auto;
    margin-bottom: 5rem;
  }
`;
const GetStarted = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 5rem;

  @media (max-width: 1350px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 650px) {
    margin: 0rem 2rem;
  }
`;

const GetStartedLeft = styled.div`
  flex: 1;
  @media (max-width: 1350px) {
    margin-top: 1rem;
  }
`;

const GetStartedLeftHeading = styled.h2`
  font-style: normal;
  font-weight: bold;
  font-size: 5rem;
  line-height: 7.3rem;
  color: #000000;
  margin-bottom: 3rem;
  width: 80%;
  @media (max-width: 1350px) {
    width: 100%;
  }

  @media (max-width: 1200px) {
    font-size: 3rem;
    line-height: 4rem;
  }

  @media (max-width: 650px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const GetStartedParagraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 2.5rem;
  line-height: 3.6rem;
  color: #4a5568;
  font-style: italic;

  @media (max-width: 1350px) {
    text-align: center;
  }

  @media (max-width: 650px) {
    font-size: 1rem;
    line-height: 1rem;
  }
`;

const GetStartedRight = styled.div`
  flex: 1;
`;

const GetStartedRightImage = styled.img`
  width: 100%;
  object-fit: cover;
  display: none;
  @media (max-width: 700px) {
    display: flex;
  }
`;

export default Hero;
