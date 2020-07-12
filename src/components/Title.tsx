import React, { useReducer } from 'react';
import useToggle from '../hooks/useToggle';
import titleReducer from '../store/title/titleReducer';
import { useFetchTitle } from '../store/title/titleActions';
import ImdbImg from '../assets/imdb.png';
import StarImg from '../assets/star.png';
import TitleBackground from './title/TitleBackground';
import TitlePosterDesktop from './title/TitlePosterDesktop';
import TitlePoster from './title/TitlePoster';
import TitleCast from './title/TitleCast';
import TitleButtons from './title/TitleButtons';
import {
  Container,
  OuterDiv,
  InnerDiv,
  Heading,
  Overview,
  Info,
  Rating,
  Imdb,
  Star,
  Rank,
  Row,
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
  const [data, dataDispatch] = useReducer(titleReducer, {
    title: {},
    cast: [],
    videos: [],
    loading: false,
  });

  useFetchTitle(url, dataDispatch);

  const {
    title: { title, name, backdrop_path, poster_path, overview, vote_average },
    cast,
    videos,
  }: any = data;

  const [modal, toggleModal] = useToggle(false);

  const heading: string = title || name;
  return (
    <Container>
      <TitleBackground title={heading} backdropPath={backdrop_path} />
      <OuterDiv>
        <InnerDiv>
          <TitlePosterDesktop title={heading} posterPath={poster_path} />
          <TitlePoster title={heading} backdropPath={backdrop_path} />

          <Info>
            <Heading>{heading}</Heading>
            <Overview>{overview}</Overview>
            <Rating>
              <Imdb src={ImdbImg} alt='imdb' />
              <Rank>{vote_average}/10</Rank>
              <Star src={StarImg} alt='star' />
            </Rating>

            {cast.length > 0 && (
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
            )}

            <TitleButtons
              video={videos.length > 0 && videos[0].key}
              toggleModal={toggleModal}
            />

            {modal && console.log('MODAL:', modal)}
          </Info>
        </InnerDiv>
      </OuterDiv>
    </Container>
  );
};

export default Title;
