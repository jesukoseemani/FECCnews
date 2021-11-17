import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons';
import {
  faInstagramSquare,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Nav = ({ active, setActive }) => {
  return (
    <StyledNav>
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

      <HamburgerButton>
        <FontAwesomeIcon
          onClick={() => setActive(true)}
          className="icon icon-bar"
          icon={faBars}
          size="3x"
          style={{ display: active ? 'none' : '' }}
        />
      </HamburgerButton>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 2rem 5rem;
  background-color: #ffffff;

  @media (max-width: 650px) {
    padding: 2rem 2rem;
  }
`;
const NavLogo = styled.div``;
const LogoParagraph = styled.p`
  font-family: 'Ranchers', cursive;
  font-size: 2.5rem;
  color: #000000;
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

  @media (max-width: 850px) {
    display: none;
  }
  .icon-search {
    font-size: 1.5rem;
    color: #454444;
  }
`;
const NavInput = styled.input`
  border: none;
  outline: none;
  padding-left: 0.5rem;
`;
const NavItems = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  cursor: pointer;

  @media (max-width: 850px) {
    display: none;
  }
`;
const NavItemlist = styled.li`
  font-family: 'Rubik', sans-serif;
  margin: 2rem;
  color: #000000;
`;

const NavItemSocialLink = styled.div`
  @media (max-width: 850px) {
    display: none;
  }
`;

const HamburgerButton = styled.div`
  transition: all 1s ease;
  display: none;
  .icon-bar {
    color: black;
    display: none;

    @media (max-width: 850px) {
      display: flex;
    }
  }

  @media (max-width: 850px) {
    display: flex;
  }
`;

// const StyledNav = styled.div``;

export default Nav;
