import React, { useContext } from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import { List, Item, Title } from './styles';
import { Flex } from '../common/Flex';
import { Container } from '../common/Container';
import MovieCard from '../MovieCard';
import Button from '../common/Button';
import { moviesContext } from '../../context/moviesContext';
import { POPULAR_BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

const MoviesList = ({ title }) => {
    const { moviesData, setUrl, status } = useContext(moviesContext);
    
    const loadMoreHandler = () => {
      const url = `${POPULAR_BASE_URL}&page=${moviesData.currentPage + 1}`
      setUrl(url);
    }
    return (
      <List>
        <Container>
          {title && <Title>{title}</Title>}
          
          <Flex as="ul" flexWrap="wrap" margin="-20px -10px">
            {moviesData.movies.map(movie =>
              <Item key={movie.id}>
                <Link to={`/movies/${movie.id}`}>
                  <MovieCard
                    image={movie.poster_path && `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
                    title={movie.title}
                    rating={movie.vote_average}
                    date={movie.release_date}
                  />
                </Link>
              </Item>)
            }
          </Flex>
          
          {status !== 'loading' && moviesData.currentPage < moviesData.totalPages &&
          <Flex align="center" justify="center" margin="30px 0 0">
            <Button callback={loadMoreHandler}>Load More</Button>
          </Flex>
          }
        </Container>
      </List>
    )
  }
;

export default React.memo(MoviesList);