import {
  SET_DATA,
  SET_ERROR,
  RESET_DATA,
  TitleState,
  TitleActionTypes,
} from './titleTypes';

const initialState: TitleState = {
  title: {
    title: '',
    name: '',
    backdrop_path: null,
    poster_path: null,
    overview: '',
    vote_average: 0,
  },
  cast: [],
  videos: [],
  error: false,
};

export default function randomizerReducer(
  state = initialState,
  action: TitleActionTypes
) {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        title: action.payload.title,
        cast: action.payload.cast,
        videos: action.payload.results,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    case RESET_DATA:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
