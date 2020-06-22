export const SET_DATA = 'SET_DATA';
export const ADVANCE_PAGE = 'ADVANCE_PAGE';

export interface SetDataAction {
  type: typeof SET_DATA;
  titles: {
    results: object[];
  };
}

export interface AdvancePage {
  type: string;
  category: string;
  page: number;
}

export interface AdvancePageAction {
  type: typeof ADVANCE_PAGE;
}
