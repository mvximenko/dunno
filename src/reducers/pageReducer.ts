import { ADVANCE_PAGE } from '../types';

interface AdvancePageAction {
  type: typeof ADVANCE_PAGE;
}

interface State {
  page: number;
}

function pageReducer(state: State, action: AdvancePageAction): any {
  switch (action.type) {
    case ADVANCE_PAGE:
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
}

export default pageReducer;
