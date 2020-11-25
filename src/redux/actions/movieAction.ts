import { ThunkDispatch } from 'redux-thunk';
import { Action } from 'redux';
import { API_URL, API_KEY } from '../../config';
import {
  SET_LIST,
  INCREMENT_PAGE,
  LoadTitles,
  LoadNewPage,
} from '../types/movieTypes';

export type TDispatch = ThunkDispatch<{}, void, Action>;

export const loadTitles: LoadTitles = (category, page, mediaType) => async (
  dispatch: TDispatch
) => {
  const endpoint = `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;
  const response = await fetch(endpoint);
  const { results } = await response.json();
  dispatch({ type: SET_LIST, payload: { results, category } });
};

export const loadNewPage: LoadNewPage = (category) => async (
  dispatch: TDispatch
) => {
  dispatch({ type: INCREMENT_PAGE, payload: category });
};
