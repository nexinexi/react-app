import styled, { keyframes } from 'styled-components';

const heroImageAnimate = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export const StyledHeroImage = styled.div`
  width: 100%;
  height: 560px;
  background: linear-gradient(135deg, #171533 0%, rgba(23,21,51,0.28) 100%),
              url(${props => props.image}) center/cover no-repeat, #171533;
  animation: ${heroImageAnimate} .3s ease-in-out;
  
  > .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  margin-bottom: 35px;
`;

export const Title = styled.h2`
  font-size: 48px;
  font-weight: 300;
  margin-bottom: 20px;
  text-transform: uppercase;
  color: #ffffff;
`;

export const Text = styled.p`
  font-size: 18px;
  font-weight: 300;
  line-height: 1.3em;
  margin: 0;
  color: #ffffff;
`;