import {
  SET_USER,
  CLEAR_USER,
  SET_TITLES,
  REMOVE_TITLE,
  UserState,
  UserActionTypes,
} from './userTypes';

const initialState: UserState = {
  userId: null,
  titles: [],
};

export default function userReducer(
  state = initialState,
  action: UserActionTypes
) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        userId: action.payload,
      };
    case CLEAR_USER:
      return initialState;
    case SET_TITLES:
      return {
        ...state,
        titles: action.payload,
      };
    case REMOVE_TITLE:
      return {
        ...state,
        titles: state.titles.filter(
          (title) => `${title.mediaType}_${title.id}` !== action.payload
        ),
      };
    default:
      return state;
  }
}
