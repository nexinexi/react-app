import React from 'react';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';
import DefaultLayout from '../../layout/default';
import { useMovies } from '../../hooks/useMovies';
import HeroImage from '../../components/HeroImage';
import Loader from '../../components/common/Loader';
import MoviesList from '../../components/MoviesList';
import { moviesContext } from '../../context/moviesContext';
import SearchBar from '../../components/common/SearchBar';

const Home = () => {
    const [{ moviesData, status }, setUrl] = useMovies();
    
    return (
      <DefaultLayout>
        <moviesContext.Provider value={{ moviesData, status, setUrl }}>
          {moviesData.heroImage &&
          <>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${moviesData.heroImage.backdrop_path}`}
              title={moviesData.heroImage.title}
              text={moviesData.heroImage.overview}
            />
            <SearchBar />
            <MoviesList title="Popular Movies" />
          </>
          }
          {status === 'loading' && <Loader />}
          {status === 'error' && <div>Something went wrong... Please, reload the page</div>}
        </moviesContext.Provider>
      </DefaultLayout>
    );
  }
;

export default React.memo(Home);