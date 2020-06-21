import React, { useReducer } from 'react';
import TitleList from '../components/TitleList';
import titleReducer from '../reducers/titleReducer';
import useFetch from '../hooks/useFetch';

const Movies: React.FC = () => {
  const [pop, popDispatch] = useReducer(titleReducer, [] as object[]);
  useFetch({ page: 1, type: 'movie', category: 'popular' }, popDispatch);

  return (
    <>
      <TitleList titles={pop} category='Popular' type='movie' />
    </>
  );
};

export default Movies;
