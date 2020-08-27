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
        stack: JSON.stringify(payload, null, 2),
      };
    case '@@connector/onManualRefundResponse':
    case '@@connector/onSaleResponse':
    case '@@connector/onVoidPaymentResponse':
      if (!payload.success) {
        return {
          ...state,
          message: payload.message,
          stack: JSON.stringify(payload, null, 2),
        };
      }
      return state;
    default:
      return state;
  }
};
