import {
  GET_PERSON,
  CLEAR_PERSON,
  SET_ERROR,
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
    case GET_PERSON:
      return {
        ...state,
        name: action.payload.name,
        titles: action.payload.titles,
      };
    case CLEAR_PERSON:
      return initialState;
    case SET_ERROR:
      return {
        ...state,
        error: true,
      };
    default:
      return state;
  }
}
