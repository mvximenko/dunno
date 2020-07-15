import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PosterPng from '../assets/poster.png';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../config';

interface Genres {
  [x: string]: any[];
}

interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

const Randomizer: React.FC = () => {
  const [mediaType, setMediaType] = useState('');
  const [genres, setGenres] = useState<Genres>({ tv: [], movie: [] });
  const [title, setTitle] = useState<Title>({
    id: 0,
    name: '',
    title: '',
    poster_path: '',
  });

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
      const random = Math.floor(Math.random() * genres[mediaType].length);
      const genre = genres[mediaType][random].id;
      fetch(
        `${API_URL}discover/${mediaType}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genre}`
      )
        .then((res: Response) => res.json())
        .then(({ results }) => {
          let title = null;
          while (!title) {
            title = results[Math.floor(Math.random() * results.length)];
            if (title.poster_path) {
              setTitle(title);
            }
          }
        });
      setMediaType('');
    }
  }, [mediaType, genres]);

  const { poster_path, name, title: t, id } = title;
  return (
    <>
      <Link to={poster_path ? `${name ? 'tv' : 'movie'}/${id}` : `randomizer`}>
        <img
          alt={name ? name : t}
          src={
            poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
              : PosterPng
          }
        />
      </Link>
      <button onClick={() => setMediaType('tv')}>TV</button>
      <button onClick={() => setMediaType('movie')}>MOVIE</button>
    </>
  );
};

export default Randomizer;
