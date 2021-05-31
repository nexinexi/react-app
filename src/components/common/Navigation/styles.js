import styled from 'styled-components';

export const StyledNavigation = styled.nav``;

export const StyledNavLinks = styled.ul`
  display: flex;
`;

export const NavLinkItem = styled.li`
  + li {
    margin-left: 20px;
  }
  
  a {
    color: #ffffff;
  }
`;