import { useEffect } from 'react';
import { useDispatch, shallowEqual } from 'react-redux';
import { useSelector } from '@/redux/store';
import {
  fetchGenres,
  fetchTitle,
  setLoaded,
  resetLoaded,
} from '@/redux/slices/randomizerSlice';
import PosterPng from '@/assets/poster.webp';
import useMediaQuery from '../../hooks/useMediaQuery';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '@/src/config';
import {
  Container,
  Background,
  Column,
  StyledLink,
  Img,
  Buttons,
  Button,
} from './RandomizerStyles';

const Randomizer = () => {
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width: 960px)');

  const {
    genres,
    mediaType,
    poster,
    backdrop,
    id,
    name,
    title,
    poster_path,
    backdrop_path,
  } = useSelector((state) => {
    return { ...state.randomizer, ...state.randomizer.title };
  }, shallowEqual);

  useEffect(() => {
    if (genres.tv.length === 0) dispatch(fetchGenres());
  }, [genres.tv.length, dispatch]);

  useEffect(() => {
    if (mediaType) dispatch(fetchTitle(mediaType, genres));
  }, [mediaType, genres, dispatch]);

  return (
    <Container>
      {backdrop_path && matches && (
        <Background
          alt={title || name}
          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
          fade={backdrop}
          onLoad={() => dispatch(setLoaded('backdrop'))}
        />
      )}
      <Column>
        <StyledLink to={poster_path ? `${name ? 'tv' : 'movie'}/${id}` : `#`}>
          <Img
            alt={title || name}
            src={
              poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${poster_path}`
                : PosterPng
            }
            fade={poster}
            onLoad={() => dispatch(setLoaded('poster'))}
          />
        </StyledLink>
        <Buttons>
          <Button onClick={() => dispatch(resetLoaded('tv'))}>TV SHOW</Button>
          <Button onClick={() => dispatch(resetLoaded('movie'))}>MOVIE</Button>
        </Buttons>
      </Column>
    </Container>
  );
};

export default Randomizer;
