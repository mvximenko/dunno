import { MOVIES, TV, NETWORKS, COMPANIES } from '../../config';
import {
  SET_LIST,
  RESET_LIST,
  LOAD_NEW_PAGE,
  ListState,
  ListActionTypes,
} from './listTypes';

const entries = { titles: [], page: 1, totalPages: 2 };

const tv: ListState = TV.reduce(
  (object, category) => ({ ...object, [`${category}_tv`]: entries }),
  {}
);

const movies: ListState = MOVIES.reduce(
  (object, category) => ({ ...object, [`${category}_movie`]: entries }),
  {}
);

const networks: ListState = NETWORKS.reduce(
  (object, network) => ({ ...object, [`${network.name}_tv`]: entries }),
  {}
);

const companies: ListState = COMPANIES.reduce(
  (object, company) => ({ ...object, [`${company.name}_movie`]: entries }),
  {}
);

const initialState: ListState = {
  ...movies,
  ...tv,
  ...networks,
  ...companies,
};

export default function listReducer(
  state = initialState,
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
        ...initialState,
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
