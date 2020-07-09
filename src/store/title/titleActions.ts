import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import {
  SET_DATA,
  SET_LOADING,
  FetchTitle,
  titleActionTypes,
} from './titleTypes';

export const useFetchTitle = (
  { type, titleId }: FetchTitle,
  dispatch: React.Dispatch<titleActionTypes>
): void => {
  useEffect(() => {
    const key: string = `${type}_${titleId}`;
    if (localStorage.getItem(key)) {
      const data = JSON.parse(localStorage.getItem(key) as string);
      dispatch({
        type: SET_DATA,
        title: data,
        cast: data.credits.cast,
        videos: data.videos.results,
      });
    } else {
      dispatch({ type: SET_LOADING, loading: true });
      fetch(
        `${API_URL}${type}/${titleId}?api_key=${API_KEY}&append_to_response=videos,credits`
      )
        .then((res: Response) => res.json())
        .then((data) => {
          if (data.status_code) {
            dispatch({ type: SET_LOADING, loading: false });
          } else {
            dispatch({
              type: SET_DATA,
              title: data,
              cast: data.credits.cast,
              videos: data.videos.results,
            });
            dispatch({ type: SET_LOADING, loading: false });
            localStorage.setItem(key, JSON.stringify(data));
          }
        });
    }
  }, [dispatch, titleId, type]);
};
