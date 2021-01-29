import { useEffect } from 'react';
import { API_URL, API_KEY } from '../../config';
import { SET_DATA, SET_ERROR, TitleActionTypes } from './titleTypes';

export function useFetchTitle(
  mediaType: string,
  titleId: string,
  dispatch: React.Dispatch<TitleActionTypes>
): void {
  useEffect(() => {
    const key = `${mediaType}_${titleId}`;
    if (localStorage.getItem(key)) {
      const data = JSON.parse(localStorage.getItem(key)!);
      dispatch({
        type: SET_DATA,
        title: data,
        cast: data.credits.cast,
        videos: data.videos.results,
      });
    } else {
      (async () => {
        const title = `${API_URL}${mediaType}/${titleId}?api_key=${API_KEY}&append_to_response=videos,credits`;
        const res = await fetch(title);
        const data = await res.json();

        if (data.status_code) {
          dispatch({ type: SET_ERROR, error: true });
        } else {
          dispatch({
            type: SET_DATA,
            title: data,
            cast: data.credits.cast,
            videos: data.videos.results,
          });
          localStorage.setItem(key, JSON.stringify(data));
        }
      })();
    }
  }, [dispatch, mediaType, titleId]);
}
