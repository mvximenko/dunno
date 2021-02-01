import { useEffect } from 'react';
import { connect } from 'react-redux';
import PosterPng from '../../assets/poster.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import {
  getGenres,
  getTitle,
  setLoaded,
  resetLoaded,
} from '../../redux/randomizer/randomizerActions';
import { Props } from '../../redux/randomizer/randomizerTypes';
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

const Randomizer: React.VFC<Props> = ({
  getGenres,
  getTitle,
  setLoaded,
  resetLoaded,
  randomizer: {
    genres,
    title: { id, name, title, poster_path, backdrop_path },
    poster,
    background,
    mediaType,
  },
}) => {
  useEffect(() => getGenres(), [getGenres]);
  useEffect(() => getTitle(mediaType, genres), [mediaType, genres, getTitle]);

  const { width, height } = useWindowDimensions();
  return (
    <Container height={height}>
      {backdrop_path && width >= 1280 && (
        <Background
          alt={title || name}
          src={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop_path}`}
          fade={background}
          onLoad={() => setLoaded('background')}
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
            onLoad={() => setLoaded('poster')}
          />
        </Link>
        <Buttons>
          <Button onClick={() => resetLoaded('tv')}>TV SHOW</Button>
          <Button onClick={() => resetLoaded('movie')}>MOVIE</Button>
        </Buttons>
      </Column>
    </Container>
  );
};

const mapStateToProps = (state: RootState) => ({
  randomizer: state.randomizer,
});

export default connect(mapStateToProps, {
  getGenres,
  getTitle,
  setLoaded,
  resetLoaded,
})(Randomizer);
