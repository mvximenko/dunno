import { combineReducers } from 'redux';
import listReducer from './list/listReducer';

export default combineReducers({ list: listReducer });
