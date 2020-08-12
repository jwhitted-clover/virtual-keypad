import * as CONST from './constants';

export const setError = ({ message, stack } = {}) => ({
  type: CONST.ERROR_SET,
  payload: { message, stack },
});
