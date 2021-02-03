import { ThunkDispatch } from 'redux-thunk';

export const SET_USER = 'SET_USER';
export const CLEAR_USER = 'CLEAR_USER';
export const SET_TITLES = 'SET_TITLES';
export const ADD_TITLE = 'ADD_TITLE';
export const REMOVE_TITLE = 'REMOVE_TITLE';

export interface Titles {
  title: string;
  mediaType: string;
  posterPath: string;
  id: string;
}

export interface UserState {
  userId: string | null;
  titles: Titles[];
}

interface GetUserAction {
  type: typeof SET_USER;
  payload: string;
}

interface ClearUserAction {
  type: typeof CLEAR_USER;
}

interface SetTitlesAction {
  type: typeof SET_TITLES;
  payload: Titles[];
}

interface AddTitleAction {
  type: typeof ADD_TITLE;
}

interface RemoveTitleAction {
  type: typeof REMOVE_TITLE;
  payload: string;
}

export type UserActionTypes =
  | GetUserAction
  | ClearUserAction
  | SetTitlesAction
  | AddTitleAction
  | RemoveTitleAction;

export type UserDispatch = ThunkDispatch<{}, void, UserActionTypes>;

export type SetTitles = (userId: string) => void;

export type AddTitle = (
  userId: string,
  id: string,
  mediaType: string,
  posterPath: string,
  title: string
) => void;

export type RemoveTitle = (userId: string, id: string) => void;

export interface Props {
  userId: string | null;
}

export interface MyListProps {
  user: UserState;
  setTitles: SetTitles;
  removeTitle: RemoveTitle;
}
