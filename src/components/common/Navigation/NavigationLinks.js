import React from 'react';
import { NavLinkItem, StyledNavLinks } from './styles';
import { Link } from 'react-router-dom';

const NavigationLinks = () => (
  <StyledNavLinks>
    <NavLinkItem>
      <Link to="/login">Login</Link>
    </NavLinkItem>
    <NavLinkItem>
      <Link to="/login">Sign Up</Link>
    </NavLinkItem>
  </StyledNavLinks>
);

export default NavigationLinks;