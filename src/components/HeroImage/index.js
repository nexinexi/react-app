import React from 'react';
import { Content, StyledHeroImage, Text, Title } from './styles';
import { Container } from '../common/Container';

const HeroImage = ({ image, title, text }) => (
  <StyledHeroImage image={image}>
    <Container>
      <Content>
        <Title>{title}</Title>
        <Text>{text}</Text>
      </Content>
    </Container>
  </StyledHeroImage>
);

export default HeroImage;