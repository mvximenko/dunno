import { ThunkDispatch } from 'redux-thunk';

export const GET_GENRES = 'GET_GENRES';
export const GET_TITLE = 'GET_TITLE';
export const SET_LOADED = 'SET_LOADED';
export const RESET_LOADED = 'RESET_LOADED';

interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genres {
  [x: string]: { id: number; name: string }[];
}

export interface RandomizerState {
  title: Title;
  genres: Genres;
  poster: boolean;
  background: boolean;
  mediaType: string;
}

interface GetGenresAction {
  type: typeof GET_GENRES;
  payload: Genres;
}

interface GetTitleAction {
  type: typeof GET_TITLE;
  payload: Title;
}

interface SetLoadedAction {
  type: typeof SET_LOADED;
  payload: string;
}

interface ResetLoadedAction {
  type: typeof RESET_LOADED;
  payload: string;
}

export type RandomizerActionTypes =
  | GetGenresAction
  | GetTitleAction
  | SetLoadedAction
  | ResetLoadedAction;

export type RandomizerDispatch = ThunkDispatch<{}, void, RandomizerActionTypes>;

export type GetGenres = () => void;
export type GetTitle = (category: string, genres: Genres) => void;
export type SetLoaded = (loaded: string) => void;
export type ResetLoaded = (type: string) => void;

export interface Props {
  randomizer: RandomizerState;
  getGenres: GetGenres;
  getTitle: GetTitle;
  setLoaded: SetLoaded;
  resetLoaded: ResetLoaded;
}
