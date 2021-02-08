import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { API_URL, API_KEY } from '../../config';

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
    resetPerson: (state) => {
      state.name = '';
      state.titles = [];
      state.error = null;
      state.loading = true;
    },
  },
});

export const {
  getPersonStart,
  getPersonSuccess,
  getPersonFailure,
  resetPerson,
} = person.actions;

export const fetchPerson = (personId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getPersonStart());
    const key = `person_${personId}`;
    if (localStorage.getItem(key)) {
      const { name, titles } = JSON.parse(localStorage.getItem(key)!);
      dispatch(getPersonSuccess({ name, titles }));
    } else {
      const endpoint = `${API_URL}person/${personId}?api_key=${API_KEY}&language=en-US&append_to_response=combined_credits`;
      const res = await fetch(endpoint);
      const { status_message, ...rest } = await res.json();

      if (status_message) throw status_message;

      const {
        name,
        combined_credits: { cast: titles },
      } = rest;

      dispatch(getPersonSuccess({ name, titles }));
      localStorage.setItem(key, JSON.stringify({ name, titles }));
    }
  } catch (error) {
    dispatch(getPersonFailure(error.toString()));
  }
};

export default person.reducer;
