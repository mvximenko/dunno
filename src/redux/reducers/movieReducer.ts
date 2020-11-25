import {
  SET_LIST,
  INCREMENT_PAGE,
  MoviesActionTypes,
} from '../types/movieTypes';

interface InitialEntries {
  titles: [];
  page: number;
}

interface InitialState {
  [x: string]: InitialEntries;
}

export const categories = ['popular', 'top_rated', 'now_playing'];

const initialState: InitialState = categories.reduce(
  (o, category) => ({ ...o, [category]: { titles: [], page: 1 } }),
  {}
);

export default function movieReducer(
  state = initialState,
  action: MoviesActionTypes
) {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        [action.payload.category]: {
          ...state[action.payload.category],
          titles: [
            ...state[action.payload.category].titles,
            ...action.payload.results,
          ],
        },
      };
    case INCREMENT_PAGE:
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          page: state[action.payload].page + 1,
        },
      };
    default:
      return state;
  }
}
