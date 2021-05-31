import styled from 'styled-components';

export const List = styled.div`
  margin: 30px 0;
`;

export const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 30px;
  color: #222;
`;

export const Item = styled.li`
  width: 100%;
  padding: 20px 10px;
  
  @media(min-width: 520px) {
    width: 50%;
  }
  
  @media(min-width: 768px) {
    width: 33.333333%;
  }
  
  @media(min-width: 1024px) {
    width: 25%;
  }
  
  @media(min-width: 1261px) {
    width: 20%;
  }
`;