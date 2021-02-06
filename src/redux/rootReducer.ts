import { combineReducers } from '@reduxjs/toolkit';
import listReducer from './list/listReducer';
import randomizerReducer from './randomizer/randomizerReducer';
import personReducer from './person/personReducer';

import userReducer from './slices/userSlice';
import myListReducer from './slices/myListSlice';
import searchReducer from './slices/searchSlice';
import titleReducer from './slices/titleSlice';

const rootReducer = combineReducers({
  list: listReducer,
  title: titleReducer,
  randomizer: randomizerReducer,
  person: personReducer,
  user: userReducer,
  myList: myListReducer,
  search: searchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
