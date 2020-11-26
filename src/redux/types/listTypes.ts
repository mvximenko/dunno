import { ThunkDispatch } from 'redux-thunk';

export const SET_LIST = 'SET_LIST';
export const RESET_LIST = 'RESET_LIST';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';

export interface InitialState {
  [x: string]: {
    titles: [];
    page: number;
  };
}

interface Payload {
  category: string;
  mediaType: string;
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
  type: typeof INCREMENT_PAGE;
  payload: Payload;
}

export type ListActionTypes =
  | SetListAction
  | LoadNewPageAction
  | ResetListAction;

export type LoadList = (
  category: string,
  page: number,
  mediaType: string
) => void;

export type IncrementPage = (category: string, mediaType: string) => void;

export type ListDispatch = ThunkDispatch<{}, void, ListActionTypes>;

export interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

export interface Props {
  loadList: LoadList;
  incrementPage: IncrementPage;
  resetList: IncrementPage;
  mediaType: string;
  category: string;
  titles: Title[];
  page: number;
}
