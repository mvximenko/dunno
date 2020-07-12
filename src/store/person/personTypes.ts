export const SET_DATA = 'SET_DATA';
export const SET_LOADING = 'SET_LOADING';

export interface FetchPerson {
  personId: number;
  person: object;
  titles: object;
  loading: boolean;
}

interface FetchPersonAction {
  type: typeof SET_DATA;
  person: object;
  titles: object;
}

interface SetLoadingAction {
  type: typeof SET_LOADING;
  loading: boolean;
}

export type PersonActionTypes = FetchPersonAction | SetLoadingAction;
