import { createAction } from 'redux-actions';
import { assign } from 'lodash';

export const create_action = (action_type: string) => createAction(action_type);
export const create_fetch_action = (action_type: string) => ({
  success: {
    type: `${action_type}_success`,
    action: create_action(`${action_type}_success`),
  },
  request: {
    type: `${action_type}_request`,
    action: create_action(`${action_type}_request`),
  },
});
export function update_state<StateType>(oldState: StateType, newState: Partial<StateType>): StateType {
  return assign({}, oldState, newState);
}
