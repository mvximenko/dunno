import {
  SET_DATA,
  SET_ERROR,
  FetchTitle,
  TitleActionTypes,
} from './titleTypes';

export default function titleReducer(
  state: FetchTitle,
  action: TitleActionTypes
): FetchTitle {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        title: action.title,
        cast: action.cast,
        videos: action.videos,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
