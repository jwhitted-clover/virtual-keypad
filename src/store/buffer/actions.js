import * as CONST from './constants';

export const resetBuffer = () => ({ type: CONST.BUFFER_RESET });

export const setBuffer = value => ({
  type: CONST.BUFFER_SET,
  payload: value || '',
});

export const appendBuffer = value => ({
  type: CONST.BUFFER_APPEND,
  payload: value,
});

export const undoBuffer = () => ({ type: CONST.BUFFER_UNDO });
