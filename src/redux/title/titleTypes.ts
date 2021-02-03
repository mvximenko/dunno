import { ThunkDispatch } from 'redux-thunk';
import { UserState, AddTitle } from '../user/userTypes';

export const GET_DATA = 'GET_DATA';
export const SET_ERROR = 'SET_ERROR';
export const CLEAR_DATA = 'CLEAR_DATA';

interface Title {
  title: string;
  name: string;
  backdrop_path: string | null;
  poster_path: string;
  overview: string;
  vote_average: number;
}

interface Videos {
  key: string;
}

interface Cast {
  profile_path: string;
  name: string;
  id: number;
  credit_id: number;
}

export interface TitleState {
  title: Title;
  cast: Cast[];
  videos: Videos[];
  error: boolean;
}

interface GetDataAction {
  type: typeof GET_DATA;
  payload: {
    title: Title;
    cast: Cast[];
    results: Videos[];
  };
}

interface SetErrorAction {
  type: typeof SET_ERROR;
}
interface ClearDataAction {
  type: typeof CLEAR_DATA;
}

export type TitleActionTypes = GetDataAction | SetErrorAction | ClearDataAction;
export type TitleDispatch = ThunkDispatch<{}, void, TitleActionTypes>;

export type GetData = (mediatype: string, titleId: string) => void;
export type ClearData = () => void;

export interface Props {
  title: TitleState;
  getData: GetData;
  clearData: ClearData;
}

export interface ButtonsProps {
  id: string;
  title: string;
  mediaType: string;
  video: string | null;
  posterPath: string;
  user: UserState;
  addTitle: AddTitle;
}
