import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getPerson, clearPerson } from '../../redux/person/personActions';
import { Props } from '../../redux/person/personTypes';
import { RootState } from '../../redux/rootReducer';
import Spinner from '../layout/Spinner';
import PosterPng from '../../assets/poster.png';
import { IMAGE_BASE_URL, TINY_POSTER_SIZE } from '../../config';
import { Wrapper, Heading, Row, Placeholder, Img, Span } from './PersonStyles';

const Person: React.VFC<Props> = ({
  getPerson,
  clearPerson,
  person: { name, titles, error },
}) => {
  const { personId } = useParams<{ personId: string }>();

  useEffect(() => {
    getPerson(personId);
    return () => clearPerson();
  }, [personId, getPerson, clearPerson]);

  return (
    <>
      {name && (
        <Wrapper>
          <Heading>{name}</Heading>
          {titles.map((title) => (
            <Link to={`/${title.media_type}/${title.id}`} key={title.id}>
              <Row>
                <Placeholder>
                  <Img
                    src={
                      title.poster_path
                        ? `${IMAGE_BASE_URL}${TINY_POSTER_SIZE}${title.poster_path}`
                        : PosterPng
                    }
                  />
                </Placeholder>
                <Span>{title.name || title.title}</Span>
              </Row>
            </Link>
          ))}
        </Wrapper>
      )}
      {!error && !name && <Spinner />}
      {error && 'NOT FOUND 404'}
    </>
  );
};

const mapStateToProps = (state: RootState) => ({ person: state.person });

export default connect(mapStateToProps, { getPerson, clearPerson })(Person);
