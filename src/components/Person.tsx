import React, { useReducer } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Spinner from './layout/Spinner';
import PosterPng from '../assets/poster.png';
import personReducer from '../store/person/personReducer';
import { useFetchPerson } from '../store/person/personActions';
import { IMAGE_BASE_URL, TINY_POSTER_SIZE } from '../config';
import { Wrapper, Heading, Row, Placeholder, Img, Span } from './PersonStyles';

const Person: React.FC = () => {
  const [state, dispatch] = useReducer(personReducer, {
    name: '',
    titles: [],
    error: false,
  });

  const { personId } = useParams<{ personId: string }>();
  useFetchPerson(personId, dispatch);

  const { name, titles, error } = state;
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
