import { combineReducers } from 'redux';
import listReducer from './list/listReducer';
import titleReducer from './title/titleReducer';
import randomizerReducer from './randomizer/randomizerReducer';
import personReducer from './person/personReducer';

const rootReducer = combineReducers({
  list: listReducer,
  title: titleReducer,
  randomizer: randomizerReducer,
  person: personReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
