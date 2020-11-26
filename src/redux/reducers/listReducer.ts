import { MOVIES, TV, NETWORKS, COMPANIES } from '../../config';
import {
  SET_LIST,
  RESET_LIST,
  INCREMENT_PAGE,
  ListActionTypes,
  InitialState,
} from '../types/listTypes';

const entries = { titles: [], page: 1 };

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
  let key = '';

  if (action.payload) {
    key = `${action.payload.category}_${action.payload.mediaType}`;
  }

  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        [key]: {
          ...state[key],
          titles: [...state[key].titles, ...action.payload.results],
        },
      };
    case RESET_LIST:
      return {
        ...state,
        [key]: {
          titles: [],
          page: 1,
        },
      };
    case INCREMENT_PAGE:
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
