import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { getPerson } from '@/api/tmdb';

interface Title {
  id: number;
  name: string;
  title: string;
  media_type: string;
  poster_path: string;
}

interface PersonState {
  name: string;
  titles: Title[];
  loading: boolean;
  error: string | null;
}

interface PersonLoaded {
  name: string;
  titles: Title[];
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
    getPersonSuccess: (state, action: PayloadAction<PersonLoaded>) => {
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
