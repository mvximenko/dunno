import React, { useReducer } from 'react';
import titleReducer from '../store/title/titleReducer';
import { useFetchTitle } from '../store/title/titleActions';
import { FetchTitle } from '../store/title/titleTypes';
import ImdbImg from '../assets/imdb.png';
import StarImg from '../assets/star.png';
import TitlePoster from './title/TitlePoster';
import TitleCast from './title/TitleCast';
import {
  Heading,
  Overview,
  Info,
  Rating,
  Imdb,
  Star,
  Rank,
  Row,
  Cast,
} from './TitleStyles';

interface Props {
  match: {
    url: string;
  };
}

interface Person {
  credit_id: number;
  profile_path: string;
  name: string;
  id: number;
}

const Title: React.FC<Props> = ({ match: { url } }) => {
  const [, type, titleId] = url.split('/');

  const initialState: FetchTitle = {
    type,
    titleId,
    title: {},
    cast: {},
    videos: {},
    loading: false,
  };

  const [data, dataDispatch] = useReducer(titleReducer, initialState);

  useFetchTitle(data, dataDispatch);

  const {
    title: { title, name, backdrop_path, poster_path, overview, vote_average },
    cast,
  }: any = data;

  return (
    <>
      <TitlePoster title={title || name} backdropPath={backdrop_path} />

      <Info>
        <Heading>{title || name}</Heading>
        <Overview>{overview}</Overview>
        <Rating>
          <Imdb src={ImdbImg} alt='imdb' />
          <Rank>{vote_average}/10</Rank>
          <Star src={StarImg} alt='star' />
        </Rating>

        {cast.length > 0 && (
          <>
            <Cast>Cast</Cast>
            <Row>
              {cast
                .filter((person: Person, index: number) => index < 4)
                .map((person: Person) => (
                  <TitleCast
                    profile_path={person.profile_path}
                    name={person.name}
                    id={person.id}
                    key={person.credit_id}
                  />
                ))}
            </Row>
          </>
        )}
      </Info>
    </>
  );
};

export default Title;
