import styled from 'styled-components';
import Logo from '../../../assets/img/logo.png';

export const StyledLogo = styled.img`
  max-width: 90px;
  
  + h1 {
    margin-left: 15px;
  }
`;

export const LogoText = styled.h1`
  font-size: 32px;
  color: #ffffff;
`;

StyledLogo.defaultProps = {
  src: Logo
};