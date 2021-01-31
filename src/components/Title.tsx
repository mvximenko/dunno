import { useEffect } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadData, resetData } from '../redux/title/titleAction';
import { Props } from '../redux/title/titleTypes';
import { RootState } from '../redux/rootReducer';
import useWindowDimensions from '../hooks/useWindowDimensions';
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

const Title: React.FC<Props> = ({
  loadData,
  resetData,
  userId,
  title: {
    title: { title, name, backdrop_path, poster_path, overview, vote_average },
    cast,
    videos,
    error,
  },
}) => {
  const { url } = useRouteMatch<{ url: string }>();
  const [, mediaType, titleId] = url.split('/');

  useEffect(() => {
    loadData(mediaType, titleId);
    return () => resetData();
  }, [mediaType, titleId, loadData, resetData]);

  const { width } = useWindowDimensions();
  const heading = title || name;
  return (
    <>
      {heading && (
        <Container>
          <TitleBackdrop title={heading} backdropPath={backdrop_path} />
          <OuterDiv>
            <InnerDiv>
              {width >= 960 && (
                <TitlePoster title={heading} posterPath={poster_path} />
              )}
              <Info>
                <Heading>{heading}</Heading>
                <Overview>
                  {width >= 960 ? sliceOverview(overview) : overview}
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
                      .filter((person: any, index: any) => index < 4)
                      .map((person: any) => (
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

const mapStateToProps = (state: RootState) => ({ title: state.title });

export default connect(mapStateToProps, { loadData, resetData })(Title);
