import React from 'react';
import { StyledNavigation } from './styles';
import { Container } from '../Container';
import { Flex } from '../Flex';
import Logo from '../Logo';
import NavigationLinks from './NavigationLinks';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <StyledNavigation>
    <Container>
      <Flex justify="space-between" align="center">
        <Link to="/">
          <Logo text="Movie App"/>
        </Link>
        <NavigationLinks />
      </Flex>
    </Container>
  </StyledNavigation>
);

export default Navigation;