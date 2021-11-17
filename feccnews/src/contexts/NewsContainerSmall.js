import React from 'react';
import styled from 'styled-components';
// import TimeAgo from 'timeago-react';
// import ReactTimeAgo from 'react-time-ago';
import { format, parseISO } from 'date-fns';
import blog from '../images/newImage.jpeg';
import { useNavigate } from 'react-router-dom';

const NewsContainerSmall = ({ newsItem }) => {
  const navigate = useNavigate();

  const newsDetailHandler = () => {
    navigate(`/news/${newsItem.id}`);
  };

  return (
    <StyledNewsContainer>
      <StyledNewsContainerImageDiv>
        <StyledNewsContainerImage src={blog} alt="" />
      </StyledNewsContainerImageDiv>
      <StyledNewsContainerContent>
        {/* TO BE REMOVED */}
        <StyledNewsBox>
          <StyledNewsBoxheading>{newsItem.title}</StyledNewsBoxheading>

          <StyledBoxNewsContent>{newsItem.body}</StyledBoxNewsContent>

          <StyledNewsBoxFooter>
            <StyledParagraph>
              {/* <TimeAgo datetime={newsItem.createdAt} /> */}
              {/* <ReactTimeAgo date={newsItem.createdAt} locale="en-US" /> */}
              {format(parseISO(newsItem.createdAt), 'MM/dd/yyyy')}
            </StyledParagraph>

            <StyledLink onClick={newsDetailHandler}>Read More..</StyledLink>
          </StyledNewsBoxFooter>
        </StyledNewsBox>
      </StyledNewsContainerContent>
    </StyledNewsContainer>
  );
};

const StyledNewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 35rem; */
  box-shadow: 0px 1.65px 3px rgba(75, 75, 75, 0.34);
  border-radius: 0.5rem;
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
`;
const StyledNewsContainerContent = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
`;

// SEPERATED

const StyledNewsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  padding: 5rem 5rem;

  @media (max-width: 800px) {
    padding: 2.5rem 2.5rem;
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

  @media (max-width: 650px) {
    font-size: 3rem;
    line-height: 3.6rem;
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

  @media (max-width: 800px) {
    font-size: 1.1rem;
    line-height: 1.3rem;
  }

  @media (max-width: 650px) {
    font-size: 1.4rem;
    line-height: 2rem;
  }
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

export default NewsContainerSmall;
