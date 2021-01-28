import { API_URL, API_KEY } from '../../config';
import {
  SET_LIST,
  RESET_LIST,
  LOAD_NEW_PAGE,
  LoadList,
  LoadNewPage,
  ListDispatch,
} from './listTypes';

export const loadList: LoadList = (category, mediaType, page, id) => async (
  dispatch: ListDispatch
) => {
  const key = `${mediaType}_${category}_${page}_${id}`;

  const endpoint = id
    ? mediaType === 'tv'
      ? `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&with_networks=${id}&page=${page}`
      : `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_companies=${id}&page=${page}`
    : `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

  if (sessionStorage.getItem(key)) {
    const { results, total_pages } = JSON.parse(sessionStorage.getItem(key)!);

    dispatch({
      type: SET_LIST,
      payload: { results, category, mediaType, totalPages: total_pages },
    });
  } else {
    const response = await fetch(endpoint);
    const { results, total_pages } = await response.json();

    dispatch({
      type: SET_LIST,
      payload: { results, category, mediaType, totalPages: total_pages },
    });

    sessionStorage.setItem(key, JSON.stringify({ results, total_pages }));
  }
};

export const resetList: LoadNewPage = (category, mediaType) => async (
  dispatch: ListDispatch
) => {
  dispatch({ type: RESET_LIST, payload: { category, mediaType } });
};

export const loadNewPage: LoadNewPage = (category, mediaType) => async (
  dispatch: ListDispatch
) => {
  dispatch({ type: LOAD_NEW_PAGE, payload: { category, mediaType } });
};
