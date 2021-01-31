import { ThunkDispatch } from 'redux-thunk';

export const SET_LIST = 'SET_LIST';
export const RESET_LIST = 'RESET_LIST';
export const LOAD_NEW_PAGE = 'LOAD_NEW_PAGE';

interface List {
  titles: Title[];
  page: number;
  totalPages: number;
}

export interface ListState {
  [x: string]: List;
}

export interface DispatchProps {
  category: string;
  mediaType: string;
}

interface SetListAction {
  type: typeof SET_LIST;
  payload: DispatchProps & {
    results: [];
    totalPages: number;
  };
}

interface ResetListAction {
  type: typeof RESET_LIST;
  payload: DispatchProps;
}

interface LoadNewPageAction {
  type: typeof LOAD_NEW_PAGE;
  payload: DispatchProps;
}

export type ListActionTypes =
  | SetListAction
  | ResetListAction
  | LoadNewPageAction;

export type ListDispatch = ThunkDispatch<{}, void, ListActionTypes>;

export type LoadList = (
  category: string,
  mediaType: string,
  page: number,
  id?: number
) => void;

export type LoadNewPage = (category: string, mediaType: string) => void;

interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

export interface Props {
  category: string;
  mediaType: string;
  id?: number;

  list: List;
  loadNewPage: LoadNewPage;
  resetList: LoadNewPage;
  loadList: LoadList;
}
