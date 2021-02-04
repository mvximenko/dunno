import { combineReducers } from '@reduxjs/toolkit';
import listReducer from './list/listReducer';
import titleReducer from './title/titleReducer';
import randomizerReducer from './randomizer/randomizerReducer';
import personReducer from './person/personReducer';

import userReducer from './slices/userSlice';
import myListReducer from './slices/myListSlice';

const rootReducer = combineReducers({
  list: listReducer,
  title: titleReducer,
  randomizer: randomizerReducer,
  person: personReducer,
  user: userReducer,
  myList: myListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
