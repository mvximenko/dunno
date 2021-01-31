import {
  SET_GENRES,
  SET_TITLE,
  SET_LOADED,
  RESET_LOADED,
  RandomizerState,
  RandomizerActionTypes,
} from './randomizerTypes';

const initialState: RandomizerState = {
  title: {
    id: 0,
    name: '',
    title: '',
    poster_path: '',
    backdrop_path: '',
  },
  genres: { tv: [], movie: [] },
  mediaType: '',
  poster: false,
  background: false,
};

export default function randomizerReducer(
  state = initialState,
  action: RandomizerActionTypes
) {
  switch (action.type) {
    case SET_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case SET_TITLE:
      return {
        ...state,
        title: action.payload,
        mediaType: '',
      };
    case SET_LOADED:
      return {
        ...state,
        [action.payload]: true,
      };
    case RESET_LOADED:
      return {
        ...state,
        poster: false,
        background: false,
        mediaType: action.payload,
      };
    default:
      return state;
  }
}
