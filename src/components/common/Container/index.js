import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media(min-width: 1280px) {
    padding: 0 40px;
  }
`;

Container.defaultProps = {
  className: 'container',
}