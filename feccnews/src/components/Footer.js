import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagramSquare,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterLogo>
        <StyledFooterP>FECCLANE NEWS</StyledFooterP>
        <StyledFooterH6>@copy; 2021</StyledFooterH6>
      </StyledFooterLogo>

      <StyledFooterList>
        <StyledItemlist>
          <StyledItemSocialLink>
            <FontAwesomeIcon
              className="icon icon-bar"
              icon={faInstagramSquare}
              size="2x"
            />
          </StyledItemSocialLink>
        </StyledItemlist>

        <StyledItemlist>
          <StyledItemSocialLink>
            <FontAwesomeIcon
              className="icon icon-bar"
              icon={faTwitter}
              size="2x"
            />
          </StyledItemSocialLink>
        </StyledItemlist>

        <StyledItemlist>
          <StyledItemSocialLink>
            <FontAwesomeIcon
              className="icon icon-bar"
              icon={faLinkedin}
              size="2x"
            />
          </StyledItemSocialLink>
        </StyledItemlist>
      </StyledFooterList>
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 3rem 5rem;
`;
const StyledFooterLogo = styled.div``;
const StyledFooterP = styled.div`
  font-family: 'Ranchers', cursive;
  font-size: 2.5rem;
  color: #000000;
  font-weight: bold;
  cursor: pointer;
`;
const StyledFooterH6 = styled.div``;
const StyledFooterList = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
`;
const StyledItemlist = styled.div`
  margin: 2rem;
`;
const StyledItemSocialLink = styled.div``;

export default Footer;
