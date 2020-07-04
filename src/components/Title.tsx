import React, { useReducer } from 'react';
import titleReducer from '../store/title/titleReducer';
import { useFetchTitle } from '../store/title/titleAction';
import { FetchTitle } from '../store/title/titleTypes';

interface Props {
  match: {
    url: string;
  };
}

const Title: React.FC<Props> = ({ match: { url } }) => {
  const [, type, titleId] = url.split('/');

  const initState: FetchTitle = {
    type,
    titleId,
    title: {},
    cast: {},
    videos: {},
    loading: false,
  };

  const [data, dataDispatch] = useReducer(titleReducer, initState);

  const {
    title: { title, name, backdrop_path, poster_path, overview, vote_average },
  }: any = data;

  useFetchTitle(data, dataDispatch);

  return (
    <>
      {console.log(data)}
      <h1>{title || name}</h1>
      <h3>{backdrop_path}</h3>
      <h3>{poster_path}</h3>
      <h3>{overview}</h3>
      <h3>{vote_average}</h3>
    </>
  );
};

export default Title;
