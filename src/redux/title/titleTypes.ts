import { ThunkDispatch } from 'redux-thunk';

export const SET_DATA = 'SET_DATA';
export const SET_ERROR = 'SET_ERROR';
export const RESET_DATA = 'RESET_DATA';

interface Title {
  title: string;
  name: string;
  backdrop_path: string | null;
  poster_path: string | null;
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

export interface SetDataAction {
  type: typeof SET_DATA;
  payload: {
    title: Title;
    cast: Cast[];
    results: Videos[];
  };
}

export interface SetErrorAction {
  type: typeof SET_ERROR;
}
export interface ResetDataAction {
  type: typeof RESET_DATA;
}

export type TitleActionTypes = SetDataAction | SetErrorAction | ResetDataAction;
export type TitleDispatch = ThunkDispatch<{}, void, TitleActionTypes>;

export type LoadData = (mediatype: string, titleId: string) => void;
export type ResetData = () => void;

export interface Props {
  userId: string | null;

  title: TitleState;
  loadData: LoadData;
  resetData: ResetData;
}
