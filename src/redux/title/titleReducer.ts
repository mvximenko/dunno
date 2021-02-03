import {
  GET_DATA,
  SET_ERROR,
  CLEAR_DATA,
  TitleState,
  TitleActionTypes,
} from './titleTypes';

const initialState: TitleState = {
  title: {
    title: '',
    name: '',
    backdrop_path: '',
    poster_path: '',
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
    case GET_DATA:
      return {
        ...state,
        title: action.payload.title,
        cast: action.payload.cast,
        videos: action.payload.results,
      };
    case CLEAR_DATA:
      return initialState;
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
