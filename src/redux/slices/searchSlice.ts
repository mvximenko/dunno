import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { API_URL, API_KEY } from '../../config';

interface Search {
  id: number;
  name: string;
  media_type: string;
  original_title: string;
}

interface UserState {
  titles: Search[];
  loading: boolean;
  error: string | null;
  isOpen: boolean;
  value: string;
}

const initialState: UserState = {
  titles: [],
  loading: true,
  error: null,
  isOpen: false,
  value: '',
};

const search = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setIsOpen: (state) => {
      state.isOpen = true;
    },
    setValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    getTitlesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTitlesSuccess: (state, action: PayloadAction<Search[]>) => {
      state.titles = action.payload;
      state.loading = false;
    },
    getTitlesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetSearch: (state) => {
      state.isOpen = false;
      state.value = '';
      state.titles = [];
      state.error = null;
      state.loading = true;
    },
  },
});

export const {
  setIsOpen,
  setValue,
  getTitlesStart,
  getTitlesSuccess,
  getTitlesFailure,
  resetSearch,
} = search.actions;

export const fetchTitles = (value: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getTitlesStart());
    const endpoint = `${API_URL}search/multi?api_key=${API_KEY}&language=en-US&query=${value}`;
    const res = await fetch(endpoint);
    const { results: titles } = await res.json();
    dispatch(getTitlesSuccess(titles));
  } catch (error) {
    dispatch(getTitlesFailure(error));
  }
};

export default search.reducer;
