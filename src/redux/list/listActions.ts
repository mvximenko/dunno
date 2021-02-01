import { API_URL, API_KEY } from '../../config';
import {
  GET_LIST,
  CLEAR_LIST,
  INCREMENT_PAGE,
  GetList,
  IncrementPage,
  ListDispatch,
} from './listTypes';

export const getList: GetList = (category, mediaType, page, id) => async (
  dispatch: ListDispatch
) => {
  const key = `${mediaType}_${category}_${page}_${id}`;
  if (sessionStorage.getItem(key)) {
    const { results, totalPages } = JSON.parse(sessionStorage.getItem(key)!);
    dispatch({
      type: GET_LIST,
      payload: { results, category, mediaType, totalPages },
    });
  } else {
    const endpoint = id
      ? mediaType === 'tv'
        ? `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&with_networks=${id}&page=${page}`
        : `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_companies=${id}&page=${page}`
      : `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

    const res = await fetch(endpoint);
    const { results, total_pages: totalPages } = await res.json();
    dispatch({
      type: GET_LIST,
      payload: { results, category, mediaType, totalPages },
    });
    sessionStorage.setItem(key, JSON.stringify({ results, totalPages }));
  }
};

export const clearList: IncrementPage = (category, mediaType) => async (
  dispatch: ListDispatch
) => {
  dispatch({ type: CLEAR_LIST, payload: { category, mediaType } });
};

export const incrementPage: IncrementPage = (category, mediaType) => async (
  dispatch: ListDispatch
) => {
  dispatch({ type: INCREMENT_PAGE, payload: { category, mediaType } });
};
