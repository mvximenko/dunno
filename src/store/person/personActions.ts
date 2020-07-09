import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import {
  SET_DATA,
  SET_LOADING,
  FetchPerson,
  personActionTypes,
} from './personTypes';

export const useFetchPerson = (
  { personId }: FetchPerson,
  dispatch: React.Dispatch<personActionTypes>
): void => {
  useEffect(() => {
    const key: string = `person_${personId}`;
    if (localStorage.getItem(key)) {
      const data = JSON.parse(localStorage.getItem(key) as string);
      dispatch({ type: SET_DATA, person: data.person, titles: data.titles });
    } else {
      dispatch({ type: SET_LOADING, loading: true });
      fetch(`${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US`)
        .then((res: Response) => res.json())
        .then((person) => {
          if (person.status_code) {
            dispatch({ type: SET_LOADING, loading: false });
          } else {
            fetch(
              `${API_URL}person/${personId}/combined_credits?api_key=${API_KEY}`
            )
              .then((res) => res.json())
              .then((titles) => {
                dispatch({ type: SET_DATA, person, titles: titles.cast });
                dispatch({ type: SET_LOADING, loading: false });
                localStorage.setItem(
                  key,
                  JSON.stringify({ person, titles: titles.cast })
                );
              });
          }
        });
    }
  }, [dispatch, personId]);
};
