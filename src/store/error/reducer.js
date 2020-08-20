import * as CONST from './constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.ERROR_CLEAR:
      return initialState;
    case CONST.ERROR_SET:
      return {
        ...state,
        message: payload.message,
        stack: payload.stack,
      };
    case '@@connector/onDeviceError':
      return {
        ...state,
        message: `Device Error ${payload.message}`,
        stack: null,
      };
    default:
      return state;
  }
};
