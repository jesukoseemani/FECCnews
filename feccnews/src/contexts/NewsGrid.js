import React, { useState } from 'react';
import styled from 'styled-components';
import NewsContainerSmall from './NewsContainerSmall';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { fade } from '../styles/Animation';
import { useScroll } from '../components/useScroll';
import { useSelector } from 'react-redux';
import paginate from '../adapters/paginate';

const NewsGrid = () => {
  const [element, controls] = useScroll();
  const [activeLeft, setActiveLeft] = useState(false);
  const [activeRight, setActiveRight] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageSize, setPageSize] = useState(6);

  const { news } = useSelector((state) => state.news);

  const data = paginate(news, pageSize, pageNumber);

  const handleClick = (direction) => {
    if (direction === 'left') {
      setPageNumber(pageNumber - 1);
      setActiveLeft(true);
      setActiveRight(false);
    } else {
      setPageNumber(pageNumber + 1);
      setActiveLeft(false);
      setActiveRight(true);
    }
  };

  return (
    <>
      <StyledNewsGrid
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        {data.map((newsItem) => (
          <NewsContainerSmall key={newsItem.id} newsItem={newsItem} />
        ))}
      </StyledNewsGrid>

      <Switch>
        <div
          className="wrapper"
          style={{
            backgroundColor: activeLeft ? '#FF4A33' : '',
            color: activeLeft ? '#ffffff' : '',
          }}
          onClick={() => handleClick('left')}
        >
          <FontAwesomeIcon className="arrow" icon={faArrowLeft} size="2x" />
        </div>

        <div className="page">{pageNumber}</div>

        <div
          className="wrapper"
          style={{
            backgroundColor: activeRight ? '#FF4A33' : '',
            color: activeRight ? '#ffffff' : '',
          }}
          onClick={() => handleClick('right')}
        >
          <FontAwesomeIcon className="arrow" icon={faArrowRight} size="2x" />
        </div>
      </Switch>
    </>
  );
};

const StyledNewsGrid = styled(motion.div)`
  margin: 2rem 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;

  @media (max-width: 1350px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    margin: 2rem 2rem;
  }
`;

const Switch = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80%;

  .wrapper {
    border: 3px solid #ff4a33;
    padding: 1rem;
    border-radius: 50%;
    margin: 3rem 1rem;
    color: #ff4a33;
    background-color: #ffffff;
    cursor: pointer;
  }

  .page {
    font-size: 1.5rem;
    font-weight: bold;
    color: black;
    margin: 0 2rem;
  }
`;

export default NewsGrid;
