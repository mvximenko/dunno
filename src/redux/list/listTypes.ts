import { ThunkDispatch } from 'redux-thunk';

export const GET_LIST = 'GET_LIST';
export const CLEAR_LIST = 'CLEAR_LIST';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';

interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

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

interface GetListAction {
  type: typeof GET_LIST;
  payload: DispatchProps & {
    results: [];
    totalPages: number;
  };
}

interface ClearListAction {
  type: typeof CLEAR_LIST;
  payload: DispatchProps;
}

interface IncrementPageAction {
  type: typeof INCREMENT_PAGE;
  payload: DispatchProps;
}

export type ListActionTypes =
  | GetListAction
  | ClearListAction
  | IncrementPageAction;

export type ListDispatch = ThunkDispatch<{}, void, ListActionTypes>;

export type GetList = (
  category: string,
  mediaType: string,
  page: number,
  id?: number
) => void;

export type IncrementPage = (category: string, mediaType: string) => void;

export interface Props {
  category: string;
  mediaType: string;
  id?: number;

  list: List;
  getList: GetList;
  clearList: IncrementPage;
  incrementPage: IncrementPage;
}
