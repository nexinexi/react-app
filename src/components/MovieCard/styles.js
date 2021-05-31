import styled from 'styled-components';
import NoImage from '../../assets/img/no_image.jpg'

export const Card = styled.article`
  position: relative;
  width: 100%;
  transform: scale(1);
  transition: transform .3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.div`
  background: url(${props => props.image || NoImage}) center center/cover no-repeat;
  height: 330px;
  border-radius: 6px;
  
  + h5 {
    margin-top: 10px;
  }
`;

export const Title = styled.h5`
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 3px;
  color: #171533;
`;

export const Date = styled.span`
  font-size: 14px;
  color: #949090;
`;

export const Rating = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  font-size: 14px;
  padding: 5px 15px;
  background-color: #b31515;
  border: 2px solid #ffffff;
  border-top: none;
  border-left: none;
  border-radius: 6px 0 6px 0;
  color: #ffffff;
  
  svg {
    position: relative;
    top: -2px;
    width: 20px;
    height: 20px;
    
    + span {
      margin-left: 5px;
    }
  }
`;