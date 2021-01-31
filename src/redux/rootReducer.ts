import { combineReducers } from 'redux';
import listReducer from './list/listReducer';
import titleReducer from './title/titleReducer';
import randomizerReducer from './randomizer/randomizerReducer';

const rootReducer = combineReducers({
  list: listReducer,
  title: titleReducer,
  randomizer: randomizerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
