import { API_URL, API_KEY } from '../../config';
import {
  SET_LIST,
  RESET_LIST,
  SET_TOTAL_PAGES,
  LOAD_NEW_PAGE,
  LoadList,
  LoadNewPage,
  ListDispatch,
} from '../types/listTypes';

export const loadList: LoadList = (category, mediaType, page, id) => async (
  dispatch: ListDispatch
) => {
  let endpoint = '';

  id
    ? mediaType === 'tv'
      ? (endpoint = `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&with_networks=${id}&page=${page}`)
      : (endpoint = `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_companies=${id}&page=${page}`)
    : (endpoint = `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`);

  const response = await fetch(endpoint);
  const { results, total_pages } = await response.json();

  if (page === 1) {
    dispatch({
      type: SET_TOTAL_PAGES,
      payload: { totalPages: total_pages, category, mediaType },
    });
  }

  dispatch({ type: SET_LIST, payload: { results, category, mediaType } });
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
