import { SET_TITLE, FetchTitle, FetchTitleAction } from './titleTypes';

export const titleReducer = (
  state: FetchTitle,
  { type, payload }: FetchTitleAction
): FetchTitle => {
  switch (type) {
    case SET_TITLE:
      return {
        ...state,
        title: payload,
      };
    default:
      return state;
  }
};

export default titleReducer;
