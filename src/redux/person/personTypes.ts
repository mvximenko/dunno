import { ThunkDispatch } from 'redux-thunk';

export const GET_PERSON = 'GET_PERSON';
export const CLEAR_PERSON = 'CLEAR_PERSON';
export const SET_ERROR = 'SET_ERROR';

interface Titles {
  id: number;
  name: string;
  title: string;
  media_type: string;
  poster_path: string;
}

export interface PersonState {
  name: string;
  titles: Titles[];
  error: boolean;
}

interface GetPersonAction {
  type: typeof GET_PERSON;
  payload: {
    name: string;
    titles: Titles[];
  };
}

interface ClearPersonAction {
  type: typeof CLEAR_PERSON;
}

interface SetErrorAction {
  type: typeof SET_ERROR;
}

export type PersonActionTypes =
  | GetPersonAction
  | ClearPersonAction
  | SetErrorAction;

export type PersonDispatch = ThunkDispatch<{}, void, PersonActionTypes>;

export type GetPerson = (personId: string) => void;
export type ClearPerson = () => void;

export interface Props {
  person: PersonState;
  getPerson: GetPerson;
  clearPerson: ClearPerson;
}
