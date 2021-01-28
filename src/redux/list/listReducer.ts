import { MOVIES, TV, NETWORKS, COMPANIES } from '../../config';
import {
  SET_LIST,
  RESET_LIST,
  LOAD_NEW_PAGE,
  ListActionTypes,
  InitialState,
} from './listTypes';

const entries = { titles: [], page: 1, totalPages: 2 };

const tv: InitialState = TV.reduce(
  (object, category) => ({ ...object, [`${category}_tv`]: entries }),
  {}
);

const movies: InitialState = MOVIES.reduce(
  (object, category) => ({ ...object, [`${category}_movie`]: entries }),
  {}
);

const networks: InitialState = NETWORKS.reduce(
  (object, network) => ({ ...object, [`${network.name}_tv`]: entries }),
  {}
);

const companies: InitialState = COMPANIES.reduce(
  (object, company) => ({ ...object, [`${company.name}_movie`]: entries }),
  {}
);

const initialState: InitialState = {
  ...movies,
  ...tv,
  ...networks,
  ...companies,
};

export default function listReducer(
  state: InitialState = initialState,
  action: ListActionTypes
) {
  const key = action.payload
    ? `${action.payload.category}_${action.payload.mediaType}`
    : '';

  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        [key]: {
          ...state[key],
          titles: [...state[key].titles, ...action.payload.results],
          totalPages: action.payload.totalPages,
        },
      };
    case RESET_LIST:
      return {
        ...state,
        [key]: entries,
      };
    case LOAD_NEW_PAGE:
      return {
        ...state,
        [key]: {
          ...state[key],
          page: state[key].page + 1,
        },
      };
    default:
      return state;
  }
}
