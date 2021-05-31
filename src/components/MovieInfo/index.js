import React from 'react';
import { Card, StyledMovieInfo, Content, Info, Title, Text } from './styles';
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from '../../config';
import MovieCard from '../MovieCard';
import { Container } from '../common/Container';

const MovieInfo = ({ movie }) => (
  <StyledMovieInfo image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${movie.backdrop_path}`}>
    <Container>
      <Content>
        <Card>
          <MovieCard image={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}/>
        </Card>
        <Info>
          <Title>{movie.title}</Title>
          <Text>{movie.overview}</Text>
        </Info>
      </Content>
    </Container>
  </StyledMovieInfo>
);

export default MovieInfo;