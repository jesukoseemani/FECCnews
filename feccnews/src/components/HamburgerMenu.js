import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagramSquare,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

function HamburgerBar({ active, setActive }) {
  return (
    <StyledHamburger style={{ right: active ? '-10%' : '-120%' }}>
      <StyledNav>
        <HamburgerButton>
          <FontAwesomeIcon
            onClick={() => setActive(false)}
            className="icon icon-times"
            icon={faTimes}
            size="2x"
          />
        </HamburgerButton>

        <NavLogo>
          <LogoParagraph>FECCLANE NEWS</LogoParagraph>
        </NavLogo>

        <NavSearch>
          <FontAwesomeIcon
            className="icon icon-search"
            icon={faSearch}
            size="2x"
          />
          <NavInput type="text" placeholder="Search..." />
        </NavSearch>

        <NavItems>
          <NavItemlist>Home</NavItemlist>
          <NavItemlist>Articles</NavItemlist>
          <NavItemlist>
            <NavItemSocialLink>
              <FontAwesomeIcon
                className="icon icon-bar"
                icon={faInstagramSquare}
                size="2x"
              />
            </NavItemSocialLink>
          </NavItemlist>
          <NavItemlist>
            <NavItemSocialLink>
              <FontAwesomeIcon
                className="icon icon-bar"
                icon={faTwitter}
                size="2x"
              />
            </NavItemSocialLink>
          </NavItemlist>
          <NavItemlist>
            <NavItemSocialLink>
              <FontAwesomeIcon
                className="icon icon-bar"
                icon={faLinkedin}
                size="2x"
              />
            </NavItemSocialLink>
          </NavItemlist>
        </NavItems>
      </StyledNav>
    </StyledHamburger>
  );
}

const StyledHamburger = styled.div`
  position: fixed;
  min-width: 40rem;
  height: 100vh;
  top: 0;
  right: -100%;
  border: 1.5px solid #ff4a33;
  border-bottom-left-radius: 3rem;
  background-color: #ffffff;
  transition: all 250ms ease;
  z-index: 999;
`;
const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 75%;
  padding: 2rem 5rem;
  background-color: #ffffff;
`;
const NavLogo = styled.div``;
const LogoParagraph = styled.p`
  font-family: 'Ranchers', cursive;
  font-size: 2.5rem;
  color: black;
  font-weight: bold;
  cursor: pointer;
`;
const NavSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Inter;
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  color: #718096;
  padding-top: 0.5rem;
  .icon-search {
    font-size: 2rem;
    color: #454444;
  }
`;
const NavInput = styled.input`
  border: none;
  outline: none;
  padding: 3rem 0.5rem;
`;
const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
`;
const NavItemlist = styled.li`
  font-family: 'Rubik', sans-serif;
  margin-right: 1.5rem;
  color: #000000;
`;

const NavItemSocialLink = styled.div``;

const HamburgerButton = styled.div`
  transition: all 1s ease;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-right: 3rem;
  .icon-times {
    color: red;
  }
`;

export default HamburgerBar;
