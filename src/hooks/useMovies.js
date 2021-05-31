import { useEffect, useState } from 'react';
import { POPULAR_BASE_URL } from '../config';

export const useMovies = () => {
  const [url, setUrl] = useState(POPULAR_BASE_URL)
  const [moviesData, setMoviesData] = useState({ movies: [] });
  const [status, setStatus] = useState('idle');
  
  useEffect(() => {
    const fetchMovies = async () => {
      setStatus('loading');
    
      try {
        const result = await (await fetch(url)).json();
      
        setTimeout(() => {
          setMoviesData(prev => ({
            ...prev,
            movies: prev.movies.length ? [...prev.movies, ...result.results] : [...result.results],
            heroImage: prev.heroImage || result.results[0],
            currentPage: result.page,
            totalPages: result.total_pages,
          }));
        
          setStatus('loaded');
        }, 500);
      } catch (e) {
        setStatus('error');
      }
    }
    
    fetchMovies();
  }, [url]);
  
  return [{ moviesData, status }, setUrl];
}