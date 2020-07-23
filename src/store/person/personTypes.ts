export const SET_DATA = 'SET_DATA';
export const SET_ERROR = 'SET_ERROR';

interface Titles {
  id: number;
  name: string;
  title: string;
  media_type: string;
  poster_path: string;
}

export interface FetchPerson {
  name: string;
  titles: Titles[];
  error: boolean;
}

interface FetchPersonAction {
  type: typeof SET_DATA;
  name: string;
  titles: Titles[];
}

interface SetErrorAction {
  type: typeof SET_ERROR;
  error: boolean;
}

export type PersonActionTypes = FetchPersonAction | SetErrorAction;
