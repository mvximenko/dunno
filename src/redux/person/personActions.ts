import { API_URL, API_KEY } from '../../config';
import {
  GET_PERSON,
  SET_ERROR,
  CLEAR_PERSON,
  GetPerson,
  ClearPerson,
  PersonDispatch,
} from './personTypes';

export const getPerson: GetPerson = (personId) => async (
  dispatch: PersonDispatch
) => {
  const key = `person_${personId}`;
  if (localStorage.getItem(key)) {
    const { name, titles } = JSON.parse(localStorage.getItem(key)!);
    dispatch({ type: GET_PERSON, payload: { name, titles } });
  } else {
    const endpoint = `${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US&append_to_response=combined_credits`;
    const res = await fetch(endpoint);
    const {
      name,
      status_code,
      combined_credits: { cast: titles },
    } = await res.json();

    if (status_code) {
      dispatch({ type: SET_ERROR });
    } else {
      dispatch({ type: GET_PERSON, payload: { name, titles } });
      localStorage.setItem(key, JSON.stringify({ name, titles }));
    }
  }
};

export const clearPerson: ClearPerson = () => async (
  dispatch: PersonDispatch
) => {
  dispatch({ type: CLEAR_PERSON });
};
