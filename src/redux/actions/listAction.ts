import { API_URL, API_KEY } from '../../config';
import {
  SET_LIST,
  RESET_LIST,
  INCREMENT_PAGE,
  LoadList,
  IncrementPage,
  ListDispatch,
} from '../types/listTypes';

export const loadSimpleList: LoadList = (company, mediaType, id) => async (
  dispatch: ListDispatch
) => {
  const endpoint =
    mediaType === 'tv'
      ? `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&with_networks=${id}`
      : `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_companies=${id}`;

  const response = await fetch(endpoint);
  const { results } = await response.json();

  dispatch({
    type: SET_LIST,
    payload: { results, category: company, mediaType },
  });
};

export const loadList: LoadList = (category, mediaType, page) => async (
  dispatch: ListDispatch
) => {
  const endpoint = `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;
  const response = await fetch(endpoint);
  const { results } = await response.json();
  dispatch({ type: SET_LIST, payload: { results, category, mediaType } });
};

export const resetList: IncrementPage = (category, mediaType) => async (
  dispatch: ListDispatch
) => {
  dispatch({ type: RESET_LIST, payload: { category, mediaType } });
};

export const incrementPage: IncrementPage = (category, mediaType) => async (
  dispatch: ListDispatch
) => {
  dispatch({ type: INCREMENT_PAGE, payload: { category, mediaType } });
};
