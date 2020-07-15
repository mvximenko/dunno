import React, { useState, useEffect } from 'react';
import PosterPng from '../assets/poster.png';
import { API_URL, API_KEY, IMAGE_BASE_URL, POSTER_SIZE } from '../config';
import {
  Container,
  Column,
  Link,
  Img,
  Buttons,
  Button,
} from './RandomizerStyles';

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
  const [loaded, setLoaded] = useState(false);
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
          let title = results[Math.floor(Math.random() * results.length)];
          if (!title.poster_path) {
            while (!title.poster_path) {
              title = results[Math.floor(Math.random() * results.length)];
            }
          }
          setTitle(title);
        });
      setMediaType('');
    }
  }, [mediaType, genres]);

  const { poster_path, name, title: t, id } = title;
  return (
    <Container>
      <Column>
        <Link to={poster_path ? `${name ? 'tv' : 'movie'}/${id}` : `#`}>
          <Img
            hide={!loaded}
            fade={loaded}
            onLoad={() => setLoaded(true)}
            alt={name ? name : t}
            src={
              poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
                : PosterPng
            }
          />
        </Link>
        <Buttons>
          <Button onClick={() => setMediaType('tv')}>TV</Button>
          <Button onClick={() => setMediaType('movie')}>MOVIE</Button>
        </Buttons>
      </Column>
    </Container>
  );
};

export default Randomizer;
