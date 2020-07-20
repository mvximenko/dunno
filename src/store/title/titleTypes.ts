export const SET_DATA = 'SET_TITLE';
export const SET_ERROR = 'SET_ERROR';

interface Title {
  title: string;
  name: string;
  backdrop_path: string | null;
  poster_path: string | null;
  overview: string;
  vote_average: number;
}

interface Cast {
  profile_path: string;
  name: string;
  id: number;
  credit_id: number;
}

interface Videos {
  key: string;
}

export interface FetchTitle {
  title: Title;
  cast: Cast[];
  videos: Videos[];
  error: boolean;
}

interface FetchTitleAction {
  type: typeof SET_DATA;
  title: Title;
  cast: Cast[];
  videos: Videos[];
}

interface SetLoadingAction {
  type: typeof SET_ERROR;
  error: boolean;
}

export type TitleActionTypes = FetchTitleAction | SetLoadingAction;
