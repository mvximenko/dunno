import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { getGenres, getRandomTitle } from '../../api/tmdb';

interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
  backdrop_path: string;
}

export interface Genres {
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
    const res = await getGenres();
    dispatch(getGenresSuccess(res));
  } catch (error) {
    dispatch(getGenresFailure(error.toString()));
  }
};

export const fetchTitle = (
  mediaType: string,
  genres: Genres
): AppThunk => async (dispatch) => {
  try {
    dispatch(getTitleStart());
    const res = await getRandomTitle(mediaType, genres);
    dispatch(getTitleSuccess(res));
  } catch (error) {
    dispatch(getTitleFailure(error.toString()));
  }
};

export default randomizer.reducer;
