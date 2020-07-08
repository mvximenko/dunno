import {
  SET_DATA,
  SET_LOADING,
  FetchPerson,
  personActionTypes,
} from './personTypes';

const personReducer = (
  state: FetchPerson,
  action: personActionTypes
): FetchPerson => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        person: action.person,
        titles: action.titles,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.loading,
      };
    default:
      return state;
  }
};

export default personReducer;
