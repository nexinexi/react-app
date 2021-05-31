import { useState, useEffect, useCallback } from 'react';
import { API_URL, API_KEY } from '../config';

export const useMovie = movieId => {
  const [movie, setMovie] = useState({});
  const [status, setStatus] = useState('idle');
  
  const fetchData = useCallback(async () => {
    setStatus('loading');
    
    try {
      const url = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
      const result = await (await fetch(url)).json();
      const creditsUrl = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
      const creditsResult = await (await fetch(creditsUrl)).json();
      
      setMovie({
        ...result,
        actors: creditsResult.cast
      });
      
      setStatus('loaded');
    } catch (e) {
      setStatus('error');
      console.log(e);
    }
  }, [movieId]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  return [movie, status];
}