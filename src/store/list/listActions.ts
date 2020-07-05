import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import { SET_LIST, GetListAction, AdvancePage } from './listTypes';

export const useGetList = (
  { type, category, page }: AdvancePage,
  dispatch: React.Dispatch<GetListAction>
): void => {
  useEffect(() => {
    fetch(
      `${API_URL}${type}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: SET_LIST, titles: data.results });
      });
  }, [dispatch, page, type, category]);
};
