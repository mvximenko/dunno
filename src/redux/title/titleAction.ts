import { API_URL, API_KEY } from '../../config';
import {
  SET_DATA,
  SET_ERROR,
  RESET_DATA,
  LoadData,
  ResetData,
  TitleDispatch,
} from './titleTypes';

export const loadData: LoadData = (mediaType, titleId) => async (
  dispatch: TitleDispatch
) => {
  const key = `${mediaType}_${titleId}`;
  if (localStorage.getItem(key)) {
    const data = JSON.parse(localStorage.getItem(key)!);
    dispatch({ type: SET_DATA, payload: data });
  } else {
    const endpoint = `${API_URL}${mediaType}/${titleId}?api_key=${API_KEY}&append_to_response=videos,credits`;
    const res = await fetch(endpoint);
    const {
      credits: { cast },
      videos: { results },
      ...title
    } = await res.json();

    if (title.status_code) {
      dispatch({ type: SET_ERROR });
    } else {
      const data = { title, cast, results };
      dispatch({ type: SET_DATA, payload: data });
      localStorage.setItem(key, JSON.stringify(data));
    }
  }
};

export const resetData: ResetData = () => async (dispatch: TitleDispatch) => {
  dispatch({ type: RESET_DATA });
};
