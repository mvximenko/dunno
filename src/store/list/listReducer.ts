import {
  SET_LIST,
  ADVANCE_PAGE,
  GetListAction,
  AdvancePage,
  AdvancePageAction,
} from './listTypes';

export const listReducer = (
  state: object[],
  action: GetListAction
): object[] => {
  switch (action.type) {
    case SET_LIST:
      return [...state, ...action.titles];
    default:
      return state;
  }
};

export const pageReducer = (
  state: AdvancePage,
  action: AdvancePageAction
): AdvancePage => {
  switch (action.type) {
    case ADVANCE_PAGE:
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};
