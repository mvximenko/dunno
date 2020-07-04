import React, { useReducer } from 'react';
import List from './list/List';
import { useGetList } from '../store/list/listActions';
import { listReducer, pageReducer } from '../store/list/listReducer';

const Movies: React.FC = () => {
  const type = 'movie';
  const initialState = { page: 1, type };

  const [pop, popDispatch] = useReducer(listReducer, [] as object[]);
  const [top, topDispatch] = useReducer(listReducer, [] as object[]);
  const [now, nowDispatch] = useReducer(listReducer, [] as object[]);

  const [popPage, popPageDispatch] = useReducer(pageReducer, {
    ...initialState,
    category: 'popular',
  });

  const [topPage, topPageDispatch] = useReducer(pageReducer, {
    ...initialState,
    category: 'top_rated',
  });

  const [nowPage, nowPageDispatch] = useReducer(pageReducer, {
    ...initialState,
    category: 'now_playing',
  });

  useGetList(popPage, popDispatch);
  useGetList(topPage, topDispatch);
  useGetList(nowPage, nowDispatch);

  return (
    <>
      <List
        titles={pop}
        category='Popular'
        type={type}
        pageDispatch={popPageDispatch}
      />
      <List
        titles={top}
        category='Top Rated'
        type={type}
        pageDispatch={topPageDispatch}
      />
      <List
        titles={now}
        category='Now Playing'
        type={type}
        pageDispatch={nowPageDispatch}
      />
    </>
  );
};

export default Movies;
