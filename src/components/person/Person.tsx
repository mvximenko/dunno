import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPerson, resetPerson } from '../../redux/slices/personSlice';
import { RootState } from '../../redux/rootReducer';
import Spinner from '../layout/Spinner';
import PosterPng from '../../assets/poster.png';
import { IMAGE_BASE_URL, TINY_POSTER_SIZE } from '../../config';
import { Wrapper, Heading, Row, Placeholder, Img, Span } from './PersonStyles';

const Person = () => {
  const { personId } = useParams<{ personId: string }>();

  const dispatch = useDispatch();
  const name = useSelector((state: RootState) => state.person.name);
  const titles = useSelector((state: RootState) => state.person.titles);
  const error = useSelector((state: RootState) => state.person.error);

  useEffect(() => {
    dispatch(fetchPerson(personId));
    return () => {
      dispatch(resetPerson());
    };
  }, [personId, dispatch]);

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

export default Person;
