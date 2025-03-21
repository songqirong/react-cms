import { cloneDeep } from 'lodash';
import { combineReducers } from 'redux';
import { Action, handleActions } from 'redux-actions';
import { create_action, create_fetch_action, update_state } from 'src/utils/redux';
import { initState, helloState } from './state';
import { InitState, HelloState } from './type';

export const INSERTCOUNT = 'insert_count';
export const insert_count = create_action(INSERTCOUNT);
export const handle_insert_count = (state: InitState, action: Action<Partial<InitState>>) => update_state(state, action.payload);

const countReducer = handleActions<InitState, Partial<InitState>>({
  [INSERTCOUNT]: handle_insert_count,
}, cloneDeep(initState));

export const GETHELLO = 'get_hello';
export const get_hello = create_fetch_action(GETHELLO);
export const handle_get_hello = (state: HelloState, action: Action<Partial<HelloState>>) => update_state(state, action.payload);
const helloReducer = handleActions<HelloState, Partial<HelloState>>({
  [get_hello.success.type]: handle_get_hello,
}, cloneDeep(helloState));

export const homeReducer = combineReducers({
  count_box: countReducer,
  hello_box: helloReducer,
});
