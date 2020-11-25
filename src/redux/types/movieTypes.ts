export const SET_LIST = 'SET_LIST';
export const INCREMENT_PAGE = 'INCREMENT_PAGE';

export interface SetListAction {
  type: typeof SET_LIST;
  payload: {
    category: string;
    results: [];
  };
}

export interface IncrementPageAction {
  type: typeof INCREMENT_PAGE;
  payload: string;
}

export type MoviesActionTypes = SetListAction | IncrementPageAction;

export type LoadTitles = (
  category: string,
  page: number,
  mediaType: string
) => void;

export interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

export type LoadNewPage = (category: string) => void;
