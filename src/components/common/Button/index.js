import React from 'react';
import { StyledButton } from './styles';

const Button = ({ type, children, callback }) => (
  <StyledButton
    type={type}
    onClick={callback}>
    {children}
  </StyledButton>
);

export default Button;