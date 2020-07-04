import {
  SET_LIST,
  ADVANCE_PAGE,
  GetListAction,
  AdvancePage,
  AdvancePageAction,
} from './listTypes';

export const listReducer = (
  state: object[],
  { type, payload }: GetListAction
): object[] => {
  switch (type) {
    case SET_LIST:
      return [...state, ...payload];
    default:
      return state;
  }
};

export const pageReducer = (
  state: AdvancePage,
  { type }: AdvancePageAction
): AdvancePage => {
  switch (type) {
    case ADVANCE_PAGE:
      return { ...state, page: state.page + 1 };
    default:
      return state;
  }
};
