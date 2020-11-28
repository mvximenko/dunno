import { ThunkDispatch } from 'redux-thunk';

export const SET_LIST = 'SET_LIST';
export const RESET_LIST = 'RESET_LIST';
export const LOAD_NEW_PAGE = 'LOAD_NEW_PAGE';
export const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES';

export interface InitialState {
  [x: string]: {
    titles: [];
    page: number;
  };
}

interface Payload {
  mediaType: string;
  category: string;
  totalPages?: number;
}

export interface SetListAction {
  type: typeof SET_LIST;
  payload: Payload & {
    results: [];
  };
}

export interface ResetListAction {
  type: typeof RESET_LIST;
  payload: Payload;
}

export interface LoadNewPageAction {
  type: typeof LOAD_NEW_PAGE;
  payload: Payload;
}

export interface SetTotalPagesAction {
  type: typeof SET_TOTAL_PAGES;
  payload: Payload;
}

export type ListActionTypes =
  | SetListAction
  | ResetListAction
  | LoadNewPageAction
  | SetTotalPagesAction;

export type LoadList = (
  category: string,
  mediaType: string,
  page: number,
  id?: number
) => void;

export type LoadNewPage = (category: string, mediaType: string) => void;

export type ListDispatch = ThunkDispatch<{}, void, ListActionTypes>;

export interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

export interface Props {
  titles: Title[];
  category: string;
  mediaType: string;
  loadNewPage: LoadNewPage;
  resetList: LoadNewPage;
  loadList: LoadList;
  totalPages: number;
  page: number;
  id?: number;
}
