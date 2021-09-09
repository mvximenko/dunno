import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { getTitles } from '@/api/tmdb';

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
    resetSearch: () => initialState,
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

export const fetchTitles =
  (value: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getTitlesStart());
      const res = await getTitles(value);
      dispatch(getTitlesSuccess(res));
    } catch (error) {
      dispatch(getTitlesFailure(error.toString()));
    }
  };

export default search.reducer;
