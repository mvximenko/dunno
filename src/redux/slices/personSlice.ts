import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { getPerson } from '@/api/tmdb';
import { PersonTitle, Person } from '@/types/tmdb';

interface PersonState {
  name: string;
  titles: PersonTitle[];
  loading: boolean;
  error: string | null;
}

const initialState: PersonState = {
  name: '',
  titles: [],
  loading: false,
  error: null,
};

const person = createSlice({
  name: 'person',
  initialState,
  reducers: {
    getPersonStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    getPersonSuccess: (state, action: PayloadAction<Person>) => {
      state.name = action.payload.name;
      state.titles = action.payload.titles;
      state.loading = false;
    },
    getPersonFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    resetPerson: () => initialState,
  },
});

export const {
  getPersonStart,
  getPersonSuccess,
  getPersonFailure,
  resetPerson,
} = person.actions;

export const fetchPerson =
  (personId: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getPersonStart());
      const res = await getPerson(personId);
      dispatch(getPersonSuccess(res));
    } catch (error) {
      dispatch(getPersonFailure(error.toString()));
    }
  };

export default person.reducer;
