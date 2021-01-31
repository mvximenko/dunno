import { ThunkDispatch } from 'redux-thunk';

export const SET_PERSON = 'SET_PERSON';
export const SET_ERROR = 'SET_ERROR';
export const RESET_PERSON = 'RESET_PERSON';

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

interface SetPersonAction {
  type: typeof SET_PERSON;
  payload: {
    name: string;
    titles: Titles[];
  };
}

interface SetErrorAction {
  type: typeof SET_ERROR;
}

interface ResetPersonAction {
  type: typeof RESET_PERSON;
}

export type PersonActionTypes =
  | SetPersonAction
  | SetErrorAction
  | ResetPersonAction;

export type PersonDispatch = ThunkDispatch<{}, void, PersonActionTypes>;

export type LoadPerson = (personId: string) => void;
export type ResetPerson = () => void;

export interface Props {
  person: PersonState;
  loadPerson: LoadPerson;
  resetPerson: ResetPerson;
}
