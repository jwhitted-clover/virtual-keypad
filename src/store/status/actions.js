import * as CONST from './constants';

export const setStatus = text => ({
  type: CONST.STATUS_SET,
  payload: text,
});
