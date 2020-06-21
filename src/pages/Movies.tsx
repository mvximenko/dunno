import React, { useReducer } from 'react';
import TitleList from '../components/TitleList';
import titleReducer from '../reducers/titleReducer';
import pageReducer from '../reducers/pageReducer';
import useFetch from '../hooks/useFetch';

const Movies: React.FC = () => {
  const initialState = {
    page: 1,
    type: 'movie',
  };

  const [pop, popDispatch] = useReducer(titleReducer, [] as object[]);

  const [popPage, popPageDispatch] = useReducer(pageReducer, {
    ...initialState,
    category: 'popular',
  });

  useFetch(popPage, popDispatch);

  return (
    <>
      <TitleList
        titles={pop}
        category='Popular'
        type='movie'
        pageDispatch={popPageDispatch}
      />
    </>
  );
};

export default Movies;
