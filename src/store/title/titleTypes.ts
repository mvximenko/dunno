export const SET_TITLE = 'SET_TITLE';

export interface FetchTitle {
  type: any;
  titleId: string;
  title: object;
  cast: object;
  videos: object;
  loading: boolean;
}

export interface FetchTitleAction {
  type: typeof SET_TITLE;
  payload: object;
}
