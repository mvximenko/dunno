import React, { useReducer } from 'react';
import { useRouteMatch } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import titleReducer from '../store/title/titleReducer';
import { useFetchTitle } from '../store/title/titleActions';
import { sliceOverview } from '../helpers';
import ImdbImg from '../assets/imdb.png';
import StarImg from '../assets/star.png';
import Spinner from './layout/Spinner';
import TitleBackdrop from './title/TitleBackdrop';
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

const Title: React.FC = () => {
  const [data, dataDispatch] = useReducer(titleReducer, {
    title: {
      title: '',
      name: '',
      backdrop_path: null,
      poster_path: null,
      overview: '',
      vote_average: 0,
    },
    cast: [],
    videos: [],
    error: false,
  });

  const { url } = useRouteMatch<{ url: string }>();
  useFetchTitle(url, dataDispatch);

  const {
    title: { title, name, backdrop_path, poster_path, overview, vote_average },
    cast,
    videos,
    error,
  } = data;

  const { width } = useWindowDimensions();
  const heading: string = title || name;

  return (
    <>
      {heading && (
        <Container>
          <TitleBackdrop title={heading} backdropPath={backdrop_path} />
          <OuterDiv>
            <InnerDiv>
              {width >= 991.98 && (
                <TitlePoster title={heading} posterPath={poster_path} />
              )}
              <Info>
                <Heading>{heading}</Heading>
                <Overview>
                  {width >= 991.98 ? sliceOverview(overview) : overview}
                </Overview>
                <Rating>
                  <Imdb src={ImdbImg} alt='imdb' />
                  <Rank>{vote_average}/10</Rank>
                  <Star src={StarImg} alt='star' />
                </Rating>

                <Row>
                  {cast.length > 0 &&
                    cast
                      .filter((person, index) => index < 4)
                      .map((person) => (
                        <TitleCast
                          profilePath={person.profile_path}
                          name={person.name}
                          id={person.id}
                          key={person.credit_id}
                        />
                      ))}
                </Row>
                <TitleButtons video={videos.length > 0 && videos[0].key} />
              </Info>
            </InnerDiv>
          </OuterDiv>
        </Container>
      )}
      {!error && !heading && <Spinner />}
      {error && 'NOT FOUND 404'}
    </>
  );
};

export default Title;
