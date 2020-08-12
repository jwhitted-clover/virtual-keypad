import * as CONST from './constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.ERROR_SET:
      return {
        ...state,
        message: payload.message,
        stack: payload.stack,
      };
    default:
      return state;
  }
};
