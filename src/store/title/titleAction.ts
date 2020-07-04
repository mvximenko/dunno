import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import { SET_TITLE, FetchTitle, FetchTitleAction } from './titleTypes';

export const useFetchTitle = (
  { type, titleId }: FetchTitle,
  dispatch: React.Dispatch<FetchTitleAction>
): void => {
  useEffect(() => {
    fetch(
      `${API_URL}${type}/${titleId}?api_key=${API_KEY}&append_to_response=videos,credits`
    )
      .then((res) => res.json())
      .then((payload) => {
        dispatch({ type: SET_TITLE, payload });
      });
  }, [dispatch, titleId, type]);
};
