import { useEffect } from 'react';
import { API_URL, API_KEY } from '../config';
import { SET_DATA, AdvancePage, SetDataAction } from '../types';

function useFetch(
  data: AdvancePage,
  dispatch: React.Dispatch<SetDataAction>
): void {
  const { type, category, page } = data;
  useEffect(() => {
    fetch(
      `${API_URL}${type}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`
    )
      .then((res) => res.json())
      .then((titles) => {
        dispatch({ type: SET_DATA, titles });
      });
  }, [dispatch, page, type, category]);
}

export default useFetch;
