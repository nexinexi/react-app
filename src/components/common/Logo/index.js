import React from 'react';
import { LogoText, StyledLogo } from './styles';
import { Flex } from '../Flex';

const Logo = ({ text }) => {
  return (text ?
      <Flex align="center">
        <StyledLogo/>
        <LogoText>{text}</LogoText>
      </Flex>
      : <StyledLogo/>
  );
};

export default Logo;