import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { getTitles, deleteTitleFB } from '../../firebase/firebaseUtils';

interface Title {
  id: string;
  title: string;
  mediaType: string;
  posterPath: string;
  firebaseId: string;
}

interface UserState {
  titles: Title[];
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  titles: [],
  loading: false,
  error: null,
};

const myList = createSlice({
  name: 'myList',
  initialState,
  reducers: {
    getTitlesStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getTitlesSuccess: (state, action: PayloadAction<Title[]>) => {
      state.titles = action.payload;
      state.loading = false;
      state.error = null;
    },
    getTitlesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTitle: (state, action: PayloadAction<string>) => {
      state.titles = state.titles.filter(
        (title: Title) => title.firebaseId !== action.payload
      );
    },
  },
});

export const {
  getTitlesStart,
  getTitlesSuccess,
  getTitlesFailure,
  deleteTitle,
} = myList.actions;

export const fetchTitles = (userId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getTitlesStart());
    const titles = await getTitles(userId);
    dispatch(getTitlesSuccess(titles));
  } catch (error) {
    dispatch(getTitlesFailure(error));
  }
};

export const removeTitle = (
  userId: string,
  firebaseId: string
): AppThunk => async (dispatch) => {
  deleteTitleFB(userId, firebaseId);
  dispatch(deleteTitle(firebaseId));
};

export default myList.reducer;
