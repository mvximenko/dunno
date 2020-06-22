import { SET_DATA, SetDataAction } from '../types';

function titleReducer(state: object[], action: SetDataAction): object[] {
  switch (action.type) {
    case SET_DATA:
      return [...state, ...action.titles.results];
    default:
      return state;
  }
}

export default titleReducer;
