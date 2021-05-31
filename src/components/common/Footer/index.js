import React from 'react';
import { Container } from '../Container';
import { dateToLocaleDate } from '../../../helpers';
import { StyledFooter, EmailLink } from './styles';

const Footer = () => {
  const date = Date.now();
  return (
    <StyledFooter>
      <Container>
        {dateToLocaleDate(date, 'en-US', {year: 'numeric'})} © nexinexi. All Rights Reserved.
        <EmailLink href="mailto: a.galeb.it@gmail.com">a.galeb.it@gmail.com</EmailLink>
      </Container>
    </StyledFooter>
  )
};

export default Footer;