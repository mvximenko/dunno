import { API_URL, API_KEY } from '../../config';
import {
  SET_GENRES,
  SET_TITLE,
  SET_LOADED,
  RESET_LOADED,
  LoadTitle,
  SetLoaded,
  ResetLoaded,
  RandomizerDispatch,
} from './randomizerTypes';

export const loadGenres = () => async (dispatch: RandomizerDispatch) => {
  const movieEndpoint = `${API_URL}genre/tv/list?api_key=${API_KEY}&language=en-US`;
  const res = await fetch(movieEndpoint);
  const { genres: tv } = await res.json();

  const tvEndpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
  const response = await fetch(tvEndpoint);
  const { genres: movie } = await response.json();

  dispatch({ type: SET_GENRES, payload: { tv, movie } });
};

export const loadTitle: LoadTitle = (mediaType, genres) => async (
  dispatch: RandomizerDispatch
) => {
  if (!mediaType) return;

  const page = Math.floor(Math.random() * 5) + 1;
  const random = Math.floor(Math.random() * genres[mediaType].length);
  const genre = genres[mediaType][random].id;

  const endpoint = `${API_URL}discover/${mediaType}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genre}`;
  const res = await fetch(endpoint);
  const { results } = await res.json();

  let title = results[Math.floor(Math.random() * results.length)];
  if (!title.poster_path || !title.backdrop_path) {
    while (!title.poster_path || !title.backdrop_path) {
      title = results[Math.floor(Math.random() * results.length)];
    }
  }

  dispatch({ type: SET_TITLE, payload: title });
};

export const setLoaded: SetLoaded = (loaded) => async (
  dispatch: RandomizerDispatch
) => {
  dispatch({ type: SET_LOADED, payload: loaded });
};

export const resetLoaded: ResetLoaded = (type) => async (
  dispatch: RandomizerDispatch
) => {
  dispatch({ type: RESET_LOADED, payload: type });
};
