import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Slider from '../components/Slider';
import NewsDetailsContext from '../contexts/NewsDetailsContext';
import Footer from '../components/Footer';
import ScrollTop from '../components/ScrollTop';

const NewsDetailsPage = () => {
  const [oneNewsImages, setoneNewsImages] = useState([]);
  const [comments, setComments] = useState([]);
  const [id, setId] = useState(null);
  const location = useLocation();

  const { news } = useSelector((state) => state.news);
  const identity = location.pathname.split('/')[2];
  setId(identity);
  const filteredData = news.filter((item) => item.id === id);

  useEffect(() => {
    const newsHandler = async () => {
      // let compiledArray;
      const { data } = await axios.get(
        `https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news/${id}/images`
      );
      setoneNewsImages(data);
    };

    newsHandler();
  }, [id]);

  useEffect(() => {
    const commentsHandler = async () => {
      // let compiledArray;
      const { data } = await axios.get(
        `https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news/${id}/comments`
      );
      setComments(data);
    };

    commentsHandler();
  }, [id]);

  return (
    <StyledDetailsPage>
      <Slider oneNewsImages={oneNewsImages} />
      <NewsDetailsContext
        filteredData={filteredData}
        comments={comments}
        setComments={setComments}
        id={id}
      />

      <Footer />
      <ScrollTop />
    </StyledDetailsPage>
  );
};

const StyledDetailsPage = styled.div``;

export default NewsDetailsPage;
