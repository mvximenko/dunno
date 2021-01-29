import { ThunkDispatch } from 'redux-thunk';

export const SET_GENRES = 'SET_GENRES';
export const SET_TITLE = 'SET_TITLE';
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

export interface InitialState {
  title: Title;
  genres: Genres;
  poster: boolean;
  background: boolean;
  mediaType: string;
}

export interface SetGenresAction {
  type: typeof SET_GENRES;
  payload: Genres;
}

export interface SetTitleAction {
  type: typeof SET_TITLE;
  payload: Title;
}

export interface SetLoadedAction {
  type: typeof SET_LOADED;
  payload: string;
}

export interface ResetLoadedAction {
  type: typeof RESET_LOADED;
  payload: string;
}

export type RandomizerActionTypes =
  | SetGenresAction
  | SetTitleAction
  | SetLoadedAction
  | ResetLoadedAction;

export type LoadGenres = () => void;
export type LoadTitle = (category: string, genres: Genres) => void;
export type SetLoaded = (loaded: string) => void;
export type ResetLoaded = (type: string) => void;

export type RandomizerDispatch = ThunkDispatch<{}, void, RandomizerActionTypes>;

export interface Props {
  randomizer: InitialState;
  loadGenres: LoadGenres;
  loadTitle: LoadTitle;
  setLoaded: SetLoaded;
  resetLoaded: ResetLoaded;
}
