import React from 'react';
import styled from 'styled-components';
import NewsBox from '../components/NewsBox';
import clane from '../images/clane.jpeg';

const NewsContainerFull = () => {
  return (
    <StyledNewsContainer>
      <StyledNewsContainerContent>
        <NewsBox />
      </StyledNewsContainerContent>
      <StyledNewsContainerImageDiv>
        <StyledNewsContainerImage src={clane} alt="" />
      </StyledNewsContainerImageDiv>
    </StyledNewsContainer>
  );
};

const StyledNewsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35rem;
  box-shadow: 0px 1.65px 3px rgba(75, 75, 75, 0.34);
  border-radius: 0.5rem;
  margin: 5rem 5rem;

  @media (max-width: 650px) {
    flex-direction: column-reverse;
    height: auto;
    margin: 5rem 2rem;
  }
`;
const StyledNewsContainerImageDiv = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;
const StyledNewsContainerImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  border-radius: 0.5rem;
`;
const StyledNewsContainerContent = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;

  @media (max-width: 650px) {
    padding: 2rem;
  }
`;

export default NewsContainerFull;
