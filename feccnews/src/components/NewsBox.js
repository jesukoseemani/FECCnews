import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NewsBox = () => {
  return (
    <StyledNewsBox>
      <StyledNewsBoxheading>Lorem ipsum dolor sit.</StyledNewsBoxheading>

      <StyledBoxNewsContent>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam a iure
        modi ullam libero nulla itaque! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Blanditiis tenetur hic ipsum?
      </StyledBoxNewsContent>

      <StyledNewsBoxFooter>
        <StyledParagraph>May 2oth, 2020</StyledParagraph>
        <Link to="/news/2">
          <StyledLink>Read More..</StyledLink>
        </Link>
      </StyledNewsBoxFooter>
    </StyledNewsBox>
  );
};
const StyledNewsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 0 5rem;

  @media (max-width: 1000px) {
    padding: 0 2rem;
  }
`;
const StyledNewsBoxheading = styled.h4`
  font-style: normal;
  font-weight: bold;
  font-size: 3rem;
  line-height: 3.6rem;
  color: #2d3748;

  @media (max-width: 800px) {
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const StyledBoxNewsContent = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.4rem;
  line-height: 2rem;
  color: #718096;
  margin: 4rem 0;
  text-align: left;
`;

const StyledNewsBoxFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const StyledParagraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #718096;
`;

const StyledLink = styled.div`
  font-style: normal;
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  color: #ff4a33;
  cursor: pointer;
`;

export default NewsBox;
