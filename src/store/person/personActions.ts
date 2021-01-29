import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import { SET_DATA, SET_ERROR, PersonActionTypes } from './personTypes';

export function useFetchPerson(
  personId: string,
  dispatch: React.Dispatch<PersonActionTypes>
): void {
  useEffect(() => {
    const key = `person_${personId}`;
    if (localStorage.getItem(key)) {
      const { name, titles } = JSON.parse(localStorage.getItem(key)!);
      dispatch({ type: SET_DATA, name, titles });
    } else {
      (async () => {
        const endpoint = `${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US&append_to_response=combined_credits`;
        const res = await fetch(endpoint);
        const {
          name,
          status_code,
          combined_credits: { cast: titles },
        } = await res.json();

        if (status_code) {
          dispatch({ type: SET_ERROR, error: true });
        } else {
          dispatch({ type: SET_DATA, name, titles });
          localStorage.setItem(key, JSON.stringify({ name, titles }));
        }
      })();
    }
  }, [dispatch, personId]);
}
