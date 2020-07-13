import {
  SET_LIST,
  ADVANCE_PAGE,
  ListActionsTypes,
  FetchList,
} from './listTypes';

export const listReducer = (
  state: FetchList,
  action: ListActionsTypes
): FetchList => {
  switch (action.type) {
    case SET_LIST:
      return {
        ...state,
        titles: [...state.titles, ...action.titles],
      };
    case ADVANCE_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    default:
      return state;
  }
};
