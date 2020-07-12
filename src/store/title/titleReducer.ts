import {
  SET_DATA,
  SET_LOADING,
  FetchTitle,
  TitleActionTypes,
} from './titleTypes';

const titleReducer = (
  state: FetchTitle,
  action: TitleActionTypes
): FetchTitle => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        title: action.title,
        cast: action.cast,
        videos: action.videos,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default titleReducer;
