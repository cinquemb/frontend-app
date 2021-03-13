import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import starman from 'assets/illustrations/starman.svg';
import starmanV1 from 'assets/illustrations/starman-v1.png';
import tokenomics from 'assets/illustrations/tokenomics.png';


import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const SaleDetails = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
      
        <Details theme={theme}>
          <h1>Tokenomics</h1>
          <p>
          Welcome to the seed sale of Shine DAO. 12,000,000 Shine tokens (out of 100,000,000 total planned supply) are offered. Total deal structure can be seen on the photo.
          </p>

        </Details>


        <Thumbnail>
          <img src={tokenomics} alt="Shine Tokenomics" />
        </Thumbnail>
      </SkillsWrapper>
    </Wrapper>
  );
};
        