import { useEffect } from 'react';
import styled from 'styled-components';
import Footer from '../components/Footer';
import PostNews from '../components/PostNews';
import Hero from '../contexts/Hero';
import NewsContainerFull from '../contexts/NewsContainerFull';
import NewsGrid from '../contexts/NewsGrid';
import axios from 'axios';
import { motion } from 'framer-motion';
import { pageAnimation } from '../styles/Animation';
import ScrollTop from '../components/ScrollTop';
import { useDispatch } from 'react-redux';
import { addNews } from '../redux/newsSlice';

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const newsHandler = async () => {
      // let compiledArray;
      const { data } = await axios.get(
        'https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news'
      );

      dispatch(addNews(data));

      // THE SERVER COULD HANDLE THE AMOUNT OF REQUEST

      // if (newsData) {
      //   compiledArray = newsData.map(async (item) => {
      //     const { data } = await axios(
      //       `https://5e4bfc87a641ed0014b02740.mockapi.io/api/clane/news/${item.id}/images`
      //     );

      //     const image = data[0].image;

      //     return { ...item, image };
      //   });
      // }

      // setAllData(compiledArray);
    };

    newsHandler();
  }, [dispatch]);

  return (
    <StyledHomePage
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Hero />
      <PostNews />
      <NewsContainerFull />
      <NewsGrid />
      <Footer />
      <ScrollTop />
    </StyledHomePage>
  );
};

const StyledHomePage = styled(motion.div)`
  margin: 0 auto;
  background-color: #ffffff;
  position: relative;
`;

export default HomePage;
