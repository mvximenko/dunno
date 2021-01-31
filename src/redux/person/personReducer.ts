import {
  SET_PERSON,
  SET_ERROR,
  RESET_PERSON,
  PersonState,
  PersonActionTypes,
} from './personTypes';

const initialState: PersonState = {
  name: '',
  titles: [],
  error: false,
};

export default function personReducer(
  state = initialState,
  action: PersonActionTypes
) {
  switch (action.type) {
    case SET_PERSON:
      return {
        ...state,
        name: action.payload.name,
        titles: action.payload.titles,
      };
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    case RESET_PERSON:
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
