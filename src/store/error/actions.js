import * as CONST from './constants';

export const clearError = () => ({ type: CONST.ERROR_CLEAR });

export const setError = ({ message, stack } = {}) => ({
  type: CONST.ERROR_SET,
  payload: { message, stack },
});
