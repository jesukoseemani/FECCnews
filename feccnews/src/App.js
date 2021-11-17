import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { AnimatePresence } from 'framer-motion';
import HomePage from './pages/HomePage';
import GlobalStyles from './components/GlobalStyles';
import NewsDetailsPage from './pages/NewsDetailsPage';
import Nav from './components/Nav';
import HamburgerBar from './components/HamburgerMenu';

function App() {
  const location = useLocation();
  const [active, setActive] = useState(false);
  return (
    <StyledApp>
      <GlobalStyles />
      <AnimatePresence exitBeforeEnter>
        <StyledNav>
          <Nav active={active} setActive={setActive} />
        </StyledNav>

        <StyledHamburger>
          <HamburgerBar active={active} setActive={setActive} />
        </StyledHamburger>

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/news/:id" element={<NewsDetailsPage />} exact></Route>
        </Routes>
      </AnimatePresence>
    </StyledApp>
  );
}

const StyledApp = styled.div`
  position: relative;
`;
const StyledNav = styled.div``;

const StyledHamburger = styled.div``;

export default App;
