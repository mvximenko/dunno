import React, { useReducer } from 'react';
import titleReducer from '../reducers/titleReducer';
import useFetch from '../hooks/useFetch';

const Movies: React.FC = () => {
  const [pop, popDispatch] = useReducer(titleReducer, [] as object[]);
  useFetch({ page: 1, type: 'movie', category: 'popular' }, popDispatch);

  return <>{console.log(pop)}</>;
};

export default Movies;
