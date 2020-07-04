export const SET_LIST = 'SET_DATA';
export const ADVANCE_PAGE = 'ADVANCE_PAGE';

export interface GetListAction {
  type: typeof SET_LIST;
  payload: object[];
}

export interface AdvancePage {
  type: string;
  category: string;
  page: number;
}

export interface AdvancePageAction {
  type: typeof ADVANCE_PAGE;
}
