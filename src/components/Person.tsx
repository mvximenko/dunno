import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import personReducer from '../store/person/personReducer';
import { useFetchPerson } from '../store/person/personActions';
import { FetchPerson } from '../store/person/personTypes';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../config';

interface Props {
  match: {
    params: {
      personId: number;
    };
  };
}

interface Title {
  id: number;
  name: string;
  title: string;
  media_type: string;
}

const Person: React.FC<Props> = ({ match }) => {
  const { personId } = match.params;

  const initialState: FetchPerson = {
    personId,
    person: {},
    titles: [],
    loading: false,
  };

  const [data, dataDispatch] = useReducer(personReducer, initialState);

  useFetchPerson(data, dataDispatch);

  const {
    person: { profile_path, name, biography },
    titles,
    loading,
  }: any = data;

  return (
    <>
      {!loading && name ? (
        <>
          <img
            style={{ width: '300px' }}
            src={`${IMAGE_BASE_URL}${POSTER_SIZE}${profile_path}`}
            alt={name}
          />
          <h1>{name}</h1>
          <p>{biography}</p>

          {titles.map((title: Title) => (
            <Link to={`/${title.media_type}/${title.id}`} key={title.id}>
              <p>{title.name || title.title}</p>
            </Link>
          ))}
        </>
      ) : null}
    </>
  );
};

export default Person;
