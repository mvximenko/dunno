import React, { useState, useEffect } from 'react';
import useWindowDimensions from '../hooks/useWindowDimensions';
import PosterPng from '../assets/poster.png';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE,
} from '../config';
import {
  Container,
  Background,
  Column,
  Link,
  Img,
  Buttons,
  Button,
} from './RandomizerStyles';

interface Genres {
  [x: string]: { id: number; name: string }[];
}

interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

const Randomizer: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [bkgLoaded, setBkgLoaded] = useState(false);
  const [mediaType, setMediaType] = useState('');
  const [genres, setGenres] = useState<Genres>({ tv: [], movie: [] });
  const [title, setTitle] = useState<Title>({
    id: 0,
    name: '',
    title: '',
    poster_path: '',
    backdrop_path: '',
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
          if (!title.poster_path || !title.backdrop_path) {
            while (!title.poster_path || !title.backdrop_path) {
              title = results[Math.floor(Math.random() * results.length)];
            }
          }
          setTitle(title);
        });
      setMediaType('');
    }
  }, [mediaType, genres]);

  function getTitle(type: string) {
    setMediaType(type);
    setLoaded(false);
    setBkgLoaded(false);
  }

  const { backdrop_path, poster_path, name, title: t, id } = title;
  const { width } = useWindowDimensions();

  return (
    <Container>
      {backdrop_path && width >= 1199.98 && (
        <Background
          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
          alt={name ? name : t}
          hide={!bkgLoaded}
          fade={bkgLoaded}
          onLoad={() => setBkgLoaded(true)}
        />
      )}
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
          <Button onClick={() => getTitle('tv')}>TV SHOW</Button>
          <Button onClick={() => getTitle('movie')}>MOVIE</Button>
        </Buttons>
      </Column>
    </Container>
  );
};

export default Randomizer;
