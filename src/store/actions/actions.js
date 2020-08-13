import * as CONST from './constants';

export const setActions = actions => ({
  type: CONST.ACTIONS_SET,
  payload: actions,
});

export const appendAction = action => ({
  type: CONST.ACTIONS_APPEND,
  payload: action,
});
