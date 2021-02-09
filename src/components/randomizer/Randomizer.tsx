import { useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import PosterPng from '../../assets/poster.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import {
  fetchGenres,
  fetchTitle,
  setLoaded,
  resetLoaded,
} from '../../redux/slices/randomizerSlice';
import { RootState } from '../../redux/rootReducer';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../config';
import {
  Container,
  Background,
  Column,
  Link,
  Img,
  Buttons,
  Button,
} from './RandomizerStyles';

const Randomizer = () => {
  const dispatch = useDispatch();

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
  } = useSelector((state: RootState) => {
    return { ...state.randomizer, ...state.randomizer.title };
  }, shallowEqual);

  useEffect(() => {
    if (genres.tv.length === 0) dispatch(fetchGenres());
  }, [genres.tv.length, dispatch]);

  useEffect(() => {
    dispatch(fetchTitle(mediaType, genres));
  }, [mediaType, genres, dispatch]);

  const { width, height } = useWindowDimensions();
  return (
    <Container height={height}>
      {backdrop_path && width >= 1280 && (
        <Background
          alt={title || name}
          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
          fade={backdrop}
          onLoad={() => dispatch(setLoaded('backdrop'))}
        />
      )}
      <Column>
        <Link to={poster_path ? `${name ? 'tv' : 'movie'}/${id}` : `#`}>
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
        </Link>
        <Buttons>
          <Button onClick={() => dispatch(resetLoaded('tv'))}>TV SHOW</Button>
          <Button onClick={() => dispatch(resetLoaded('movie'))}>MOVIE</Button>
        </Buttons>
      </Column>
    </Container>
  );
};

export default Randomizer;
