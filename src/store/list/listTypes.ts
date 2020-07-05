export const SET_LIST = 'SET_DATA';
export const ADVANCE_PAGE = 'ADVANCE_PAGE';

export interface FetchListAction {
  type: typeof SET_LIST;
  titles: object[];
}

export interface AdvancePage {
  type: string;
  category: string;
  page: number;
}

export interface AdvancePageAction {
  type: typeof ADVANCE_PAGE;
}
