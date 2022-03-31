import { combineReducers } from 'redux';
import { homeReducer } from './home/reducer';
export const reducers = combineReducers({
  home: homeReducer
})