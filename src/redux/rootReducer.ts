import { combineReducers } from 'redux';
import listReducer from './list/listReducer';
import randomizerReducer from './randomizer/randomizerReducer';

export default combineReducers({
  list: listReducer,
  randomizer: randomizerReducer,
});
