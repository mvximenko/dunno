import {
  SET_DATA,
  SET_ERROR,
  FetchPerson,
  PersonActionTypes,
} from './personTypes';

export default function personReducer(
  state: FetchPerson,
  action: PersonActionTypes
): FetchPerson {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        name: action.name,
        titles: action.titles,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
