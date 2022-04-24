import { cloneDeep } from 'lodash';
import { combineReducers } from 'redux';
import { Action, handleActions, ReduxCompatibleReducer } from 'redux-actions';
import { create_action, update_state } from 'src/utils/redux';
import { homeReducer } from './home/reducer';


// 系统主题切换
export interface IThemeState{
  prefixCls: 'custom' | 'ant'
}

const initState: IThemeState = {
  prefixCls: 'ant',
};
export const UPDATETHEME = 'update_theme';
export const update_theme = create_action(UPDATETHEME);
export const handle_update_theme = (state: IThemeState, action: Action<Partial<IThemeState>>) => update_state(state, action.payload);
const themeReducer: ReduxCompatibleReducer<IThemeState, IThemeState> = handleActions({
  [UPDATETHEME]: handle_update_theme,
}, cloneDeep(initState) );

export const reducers = combineReducers({
  home: homeReducer,
  theme: themeReducer,
});
