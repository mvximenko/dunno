import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { API_URL, API_KEY } from '../../config';

interface Title {
  title: string;
  name: string;
  backdrop_path: string | null;
  poster_path: string;
  overview: string;
  vote_average: number;
}

interface Cast {
  profile_path: string;
  name: string;
  id: number;
  credit_id: number;
}

interface Videos {
  key: string;
}

interface TitleState {
  title: Title;
  cast: Cast[];
  videos: Videos[];
  loading: boolean;
  error: string | null;
  poster: boolean;
  backdrop: boolean;
  [key: string]: TitleState[keyof TitleState];
}

interface TitleLoaded {
  title: Title;
  cast: Cast[];
  results: Videos[];
}

const initialState: TitleState = {
  title: {
    title: '',
    name: '',
    backdrop_path: '',
    poster_path: '',
    overview: '',
    vote_average: 0,
  },
  cast: [],
  videos: [],
  loading: false,
  error: null,
  poster: false,
  backdrop: false,
};

const title = createSlice({
  name: 'title',
  initialState,
  reducers: {
    getTitleStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTitleSuccess: (state, action: PayloadAction<TitleLoaded>) => {
      state.title = action.payload.title;
      state.cast = action.payload.cast;
      state.videos = action.payload.results;
      state.loading = false;
    },
    getTitleFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetTitle: (state) => {
      state.title = {
        title: '',
        name: '',
        backdrop_path: '',
        poster_path: '',
        overview: '',
        vote_average: 0,
      };
      state.cast = [];
      state.videos = [];
      state.loading = false;
      state.error = null;
      state.backdrop = false;
      state.poster = false;
    },
    setLoaded: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
  },
});

export const {
  getTitleStart,
  getTitleSuccess,
  getTitleFailure,
  resetTitle,
  setLoaded,
} = title.actions;

export const fetchTitle = (
  mediaType: string,
  titleId: string
): AppThunk => async (dispatch) => {
  try {
    dispatch(getTitleStart());
    const key = `${mediaType}_${titleId}`;
    if (localStorage.getItem(key)) {
      const data = JSON.parse(localStorage.getItem(key)!);
      dispatch(getTitleSuccess(data));
    } else {
      const endpoint = `${API_URL}${mediaType}/${titleId}?api_key=${API_KEY}&append_to_response=videos,credits`;
      const res = await fetch(endpoint);
      const { status_message, ...rest } = await res.json();

      if (status_message) throw status_message;

      const {
        credits: { cast },
        videos: { results },
        ...title
      } = rest;

      const data = { title, cast, results };
      dispatch(getTitleSuccess(data));
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (error) {
    dispatch(getTitleFailure(error.toString()));
  }
};

export default title.reducer;
