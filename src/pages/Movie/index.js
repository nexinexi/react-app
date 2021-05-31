import React from 'react';
import DefaultLayout from '../../layout/default';
import { useParams } from 'react-router-dom';
import { useMovie } from '../../hooks/useMovie';
import Breadcrumbs from '../../components/common/Breadcrumbs';
import MovieInfo from '../../components/MovieInfo';
import Loader from '../../components/common/Loader';

const Movies = () => {
  const { id } = useParams();
  const [movie, status] = useMovie(id);
  const crumbs = [
    {
      path: '/',
      name: 'Home',
    },
    {
      name: movie.title,
    }
  ]
  
  return (
    <DefaultLayout>
      {status === 'loaded' &&
      <>
        <Breadcrumbs crumbs={crumbs}/>
        <MovieInfo movie={movie}/>
        <div style={{ height: '50vh' }}></div>
      </>
      }
      {status === 'loading' && <Loader />}
    </DefaultLayout>
  );
};

export default Movies;