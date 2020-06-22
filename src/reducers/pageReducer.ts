import { ADVANCE_PAGE, AdvancePage, AdvancePageAction } from '../types';

function pageReducer(
  state: AdvancePage,
  action: AdvancePageAction
): AdvancePage {
  switch (action.type) {
    case ADVANCE_PAGE:
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
}

export default pageReducer;
