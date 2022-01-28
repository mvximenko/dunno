import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from '@/redux/store';
import { fetchPerson, resetPerson } from '@/redux/slices/personSlice';
import Spinner from '../layout/Spinner';
import NotFound from '../layout/NotFound';
import PosterPng from '@/assets/poster.webp';
import { IMAGE_BASE_URL, TINY_POSTER_SIZE } from '@/src/config';
import { Wrapper, Heading, Row, Placeholder, Img, Span } from './PersonStyles';

const Person = () => {
  const { personId } = useParams<{ personId: string }>();

  const dispatch = useDispatch();
  const name = useSelector((state) => state.person.name);
  const titles = useSelector((state) => state.person.titles);
  const error = useSelector((state) => state.person.error);

  useEffect(() => {
    dispatch(fetchPerson(personId));
    return () => {
      dispatch(resetPerson());
    };
  }, [personId, dispatch]);

  if (!error && !name) return <Spinner />;
  if (error) return <NotFound />;

  return (
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
  );
};

export default Person;
