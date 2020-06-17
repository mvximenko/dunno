import { SET_DATA } from '../types';

interface SetDataAction {
  type: typeof SET_DATA;
  titles: {
    results: object[];
  };
}

function titleReducer(state: object[], action: SetDataAction): object[] {
  switch (action.type) {
    case SET_DATA:
      return [...state, ...action.titles.results];
    default:
      return state;
  }
}

export default titleReducer;
