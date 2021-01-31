import { API_URL, API_KEY } from '../../config';
import {
  SET_PERSON,
  SET_ERROR,
  RESET_PERSON,
  LoadPerson,
  ResetPerson,
  PersonDispatch,
} from './personTypes';

export const loadPerson: LoadPerson = (personId) => async (
  dispatch: PersonDispatch
) => {
  const key = `person_${personId}`;
  if (localStorage.getItem(key)) {
    const { name, titles } = JSON.parse(localStorage.getItem(key)!);
    dispatch({ type: SET_PERSON, payload: { name, titles } });
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
      dispatch({ type: SET_PERSON, payload: { name, titles } });
      localStorage.setItem(key, JSON.stringify({ name, titles }));
    }
  }
};

export const resetPerson: ResetPerson = () => async (
  dispatch: PersonDispatch
) => {
  dispatch({ type: RESET_PERSON });
};
