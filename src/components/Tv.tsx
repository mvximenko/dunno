import React, { useReducer } from 'react';
import List from './list/List';
import Spinner from './layout/Spinner';
import { useFetchList } from '../store/list/listActions';
import listReducer from '../store/list/listReducer';

const Tv: React.FC = () => {
  const initialState = { page: 1, type: 'tv', titles: [] };

  const [pop, popDispatch] = useReducer(listReducer, {
    ...initialState,
    category: 'popular',
  });
  const [top, topDispatch] = useReducer(listReducer, {
    ...initialState,
    category: 'top_rated',
  });
  const [ont, ontDispatch] = useReducer(listReducer, {
    ...initialState,
    category: 'on_the_air',
  });
  const [air, airDispatch] = useReducer(listReducer, {
    ...initialState,
    category: 'airing_today',
  });

  useFetchList(pop, popDispatch);
  useFetchList(top, topDispatch);
  useFetchList(ont, ontDispatch);
  useFetchList(air, airDispatch);

  return (
    <>
      {ont.titles.length > 0 ? (
        <>
          <List titles={pop} dispatch={popDispatch} />
          <List titles={top} dispatch={topDispatch} />
          <List titles={ont} dispatch={ontDispatch} />
          <List titles={air} dispatch={airDispatch} />
        </>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default Tv;
