import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { getTitles, deleteTitleFB } from '@/api/firebase';
import { MyListTitle } from '@/types/firebase';

interface MyListState {
  titles: MyListTitle[];
  loading: boolean;
  error: string | null;
}

const initialState: MyListState = {
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
    getTitlesSuccess: (state, action: PayloadAction<MyListTitle[]>) => {
      state.titles = action.payload;
      state.loading = false;
    },
    getTitlesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTitle: (state, action: PayloadAction<string>) => {
      state.titles = state.titles.filter(
        (title: MyListTitle) => title.firebaseId !== action.payload
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

export const fetchTitles =
  (userId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getTitlesStart());
      const titles = await getTitles(userId);
      dispatch(getTitlesSuccess(titles));
    } catch (error) {
      dispatch(getTitlesFailure(error.toString()));
    }
  };

export const removeTitle =
  (userId: string, firebaseId: string): AppThunk =>
  async (dispatch) => {
    deleteTitleFB(userId, firebaseId);
    dispatch(deleteTitle(firebaseId));
  };

export default myList.reducer;
