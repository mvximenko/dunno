import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import {
  API_URL,
  API_KEY,
  MOVIES,
  TV,
  NETWORKS,
  COMPANIES,
} from '../../config';

interface Title {
  id: number;
  name: string;
  title: string;
  poster_path: string;
}

export interface ListTypes {
  page: number;
  titles: Title[];
  totalPages: number;
}

interface ListState {
  [key: string]: ListTypes;
}

interface SetList {
  key: string;
  results: Title[];
  totalPages: number;
}

const entries = { titles: [], page: 1, totalPages: 2 };

const tv = TV.reduce(
  (object, category) => ({ ...object, [`${category}_tv`]: entries }),
  {}
);

const movies = MOVIES.reduce(
  (object, category) => ({ ...object, [`${category}_movie`]: entries }),
  {}
);

const networks = NETWORKS.reduce(
  (object, network) => ({ ...object, [`${network.name}_tv`]: entries }),
  {}
);

const companies = COMPANIES.reduce(
  (object, company) => ({ ...object, [`${company.name}_movie`]: entries }),
  {}
);

const initialState: ListState = {
  ...tv,
  ...movies,
  ...networks,
  ...companies,
};

const list = createSlice({
  name: 'list',
  initialState,
  reducers: {
    setList: (state, action: PayloadAction<SetList>) => {
      state[action.payload.key] = {
        titles: [
          ...state[action.payload.key].titles,
          ...action.payload.results,
        ],
        page: state[action.payload.key].page,
        totalPages: action.payload.totalPages,
      };
    },
    incrementPage: (state, action: PayloadAction<string>) => {
      state[action.payload] = {
        ...state[action.payload],
        page: state[action.payload].page + 1,
      };
    },
    resetLists: () => initialState,
  },
});

export const { setList, incrementPage, resetLists } = list.actions;

export const fetchList = (
  category: string,
  mediaType: string,
  page: number,
  id?: number
): AppThunk => async (dispatch) => {
  try {
    const key = `${mediaType}_${category}_${page}_${id}`;
    const index = `${category}_${mediaType}`;
    if (sessionStorage.getItem(key)) {
      const { results, totalPages } = JSON.parse(sessionStorage.getItem(key)!);
      dispatch(setList({ key: index, results, totalPages }));
    } else {
      const endpoint = id
        ? mediaType === 'tv'
          ? `${API_URL}discover/tv?api_key=${API_KEY}&language=en-US&with_networks=${id}&page=${page}`
          : `${API_URL}discover/movie?api_key=${API_KEY}&language=en-US&with_companies=${id}&page=${page}`
        : `${API_URL}${mediaType}/${category}?api_key=${API_KEY}&language=en-US&page=${page}`;

      const res = await fetch(endpoint);
      const { results, total_pages: totalPages } = await res.json();
      dispatch(setList({ key: index, results, totalPages }));
      sessionStorage.setItem(key, JSON.stringify({ results, totalPages }));
    }
  } catch (error) {
    console.log(error);
  }
};

export default list.reducer;
