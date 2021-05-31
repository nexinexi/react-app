import styled, { keyframes } from 'styled-components';

const movieInfoAnimate = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export const StyledMovieInfo = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 700px;
  background: linear-gradient(135deg, #171533 0%, rgba(23,21,51,0.28) 100%),
              url(${({image}) => image}) center/cover no-repeat, #171533;
  animation: ${movieInfoAnimate} .3s ease-in-out;
`;

export const Content = styled.div`
  display: flex;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

export const Card = styled.div`
  min-width: 230px;
`;

export const Info = styled.div`
  flex-grow: 1;
  padding: 40px 30px;
  color: #ffffff;
`;

export const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  line-height: 1.3em;
`;