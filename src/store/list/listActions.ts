import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import { SET_LIST, FetchListAction, AdvancePage } from './listTypes';

export const useFetchList = (
  { type, category, page }: AdvancePage,
  dispatch: React.Dispatch<FetchListAction>
): void => {
  useEffect(() => {
    const key: string = `${type}_${category}_${page}`;
    if (sessionStorage.getItem(key)) {
      const toJson: any = sessionStorage.getItem(key);
      const data = JSON.parse(toJson);
      dispatch({ type: SET_LIST, titles: data.results });
    } else {
      fetch(
        `${API_URL}${type}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
      )
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: SET_LIST, titles: data.results });
          sessionStorage.setItem(key, JSON.stringify(data));
        });
    }
  }, [dispatch, page, type, category]);
};
