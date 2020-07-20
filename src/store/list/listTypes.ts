export const SET_LIST = 'SET_DATA';
export const ADVANCE_PAGE = 'ADVANCE_PAGE';

export interface Titles {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

export interface FetchList {
  page: number;
  mediaType: string;
  category: string;
  titles: Titles[];
}

export interface FetchListAction {
  type: typeof SET_LIST;
  titles: Titles[];
}

export interface AdvancePageAction {
  type: typeof ADVANCE_PAGE;
}

export type ListActionsTypes = FetchListAction | AdvancePageAction;
