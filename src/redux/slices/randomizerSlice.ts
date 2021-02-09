import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { API_URL, API_KEY } from '../../config';

interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

interface Genres {
  [key: string]: { id: number; name: string }[];
}

interface RandomizerState {
  title: Title;
  genres: Genres;
  poster: boolean;
  backdrop: boolean;
  mediaType: string;
  loading: boolean;
  error: string | null;
  [key: string]: RandomizerState[keyof RandomizerState];
}

const initialState: RandomizerState = {
  title: {
    id: 0,
    name: '',
    title: '',
    poster_path: '',
    backdrop_path: '',
  },
  genres: { tv: [], movie: [] },
  mediaType: '',
  poster: false,
  backdrop: false,
  loading: false,
  error: null,
};

const randomizer = createSlice({
  name: 'randomizer',
  initialState,
  reducers: {
    getGenresStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getGenresSuccess: (state, action: PayloadAction<Genres>) => {
      state.genres.tv = action.payload.tv;
      state.genres.movie = action.payload.movie;
    },
    getGenresFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    getTitleStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTitleSuccess: (state, action: PayloadAction<Title>) => {
      state.title = action.payload;
      state.mediaType = '';
    },
    getTitleFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    setLoaded: (state, action: PayloadAction<string>) => {
      state[action.payload] = true;
    },
    resetLoaded: (state, action: PayloadAction<string>) => {
      state.mediaType = action.payload;
      state.poster = false;
      state.backdrop = false;
    },
  },
});

export const {
  getGenresStart,
  getGenresSuccess,
  getGenresFailure,
  getTitleStart,
  getTitleSuccess,
  getTitleFailure,
  setLoaded,
  resetLoaded,
} = randomizer.actions;

export const fetchGenres = (): AppThunk => async (dispatch) => {
  try {
    dispatch(getGenresStart());

    const movieEndpoint = `${API_URL}genre/tv/list?api_key=${API_KEY}&language=en-US`;
    const res = await fetch(movieEndpoint);
    const { genres: tv } = await res.json();

    const tvEndpoint = `${API_URL}genre/movie/list?api_key=${API_KEY}&language=en-US`;
    const response = await fetch(tvEndpoint);
    const { genres: movie } = await response.json();

    dispatch(getGenresSuccess({ tv, movie }));
  } catch (error) {
    dispatch(getGenresFailure(error.toString()));
  }
};

export const fetchTitle = (
  mediaType: string,
  genres: Genres
): AppThunk => async (dispatch) => {
  if (!mediaType) return;
  try {
    dispatch(getTitleStart());
    const page = Math.floor(Math.random() * 5) + 1;
    const random = Math.floor(Math.random() * genres[mediaType].length);
    const genre = genres[mediaType][random].id;

    const endpoint = `${API_URL}discover/${mediaType}?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=${page}&with_genres=${genre}`;
    const res = await fetch(endpoint);
    const { results } = await res.json();

    let title = results[Math.floor(Math.random() * results.length)];
    if (!title.poster_path || !title.backdrop_path) {
      while (!title.poster_path || !title.backdrop_path) {
        title = results[Math.floor(Math.random() * results.length)];
      }
    }

    dispatch(getTitleSuccess(title));
  } catch (error) {
    dispatch(getTitleFailure(error.toString()));
  }
};

export default randomizer.reducer;
