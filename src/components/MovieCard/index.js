import React from 'react';
import { Card, Image, Rating, Title, Date } from './styles';
import { VscStarFull } from 'react-icons/all';
import { Flex } from '../common/Flex';
import { dateToLocaleDate } from '../../helpers';

const MovieCard = ({ image, title, rating, date }) => (
  <Card>
    {rating &&
    <Rating>
      <Flex align="center">
        <VscStarFull />
        <span>{rating}</span>
      </Flex>
    </Rating>
    }
    
    <Image image={image} />
    {title && <Title>{title}</Title>}
    {date && <Date>{dateToLocaleDate(date, 'en-US')}</Date>}
  </Card>
);

export default MovieCard;