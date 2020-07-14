import React, { useState, useEffect } from 'react';
import { API_URL, API_KEY } from '../config';

const Randomizer: React.FC = () => {
  const [mediaType, setMediaType] = useState('');
  const [genres, setGenres] = useState<any>({});
  const [titles, setTitles] = useState<any>([]);

  useEffect(() => {
    fetch(`${API_URL}genre/tv/list?api_key=${API_KEY}&language=en-US`)
      .then((res: Response) => res.json())
      .then((tv) => {
        fetch(`${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`)
          .then((res: Response) => res.json())
          .then((movie) => {
            setGenres({ tv: [...tv.genres], movie: [...movie.genres] });
          });
      });
  }, []);

  useEffect(() => {
    if (mediaType) {
      const page = Math.floor(Math.random() * 5) + 1;
      const random = Math.floor(Math.random() * genres[mediaType].length) + 1;
      const genre = genres[mediaType][random].id;
      fetch(
        `${API_URL}discover/${mediaType}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genre}`
      )
        .then((res: Response) => res.json())
        .then((data) => {
          setTitles([...data.results]);
        });
    }
  }, [mediaType, genres]);

  return <button onClick={() => setMediaType('tv')}></button>;
};

export default Randomizer;
