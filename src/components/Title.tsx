import { useReducer } from 'react';
import { useRouteMatch } from 'react-router-dom';
import useWindowDimensions from '../hooks/useWindowDimensions';
import titleReducer from '../store/title/titleReducer';
import { useFetchTitle } from '../store/title/titleActions';
import { sliceOverview } from '../helpers';
import StarIcon from './assets/StarIcon';
import Imdb from './assets/Imdb';
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
  ImdbWrapper,
  StarWrapper,
  Rank,
  Row,
} from './TitleStyles';

interface Props {
  userId: string | null;
}

const Title: React.FC<Props> = ({ userId }) => {
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
  const [, mediaType, titleId] = url.split('/');
  useFetchTitle(mediaType, titleId, dataDispatch);

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
                  <ImdbWrapper>
                    <Imdb />
                  </ImdbWrapper>
                  <Rank>{vote_average}/10</Rank>
                  <StarWrapper>
                    <StarIcon />
                  </StarWrapper>
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
                <TitleButtons
                  title={heading}
                  userId={userId}
                  id={titleId}
                  mediaType={mediaType}
                  posterPath={poster_path}
                  video={videos.length ? videos[0].key : null}
                />
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
