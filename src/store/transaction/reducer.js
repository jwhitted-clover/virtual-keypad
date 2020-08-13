import * as CONST from './constants';
import initialState from './initialState';
import { ACTION } from '../../common';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.TRANSACTION_ADD_AMOUNT:
      return {
        ...state,
        amount: state.amount + payload,
      };
    case CONST.TRANSACTION_SET_AMOUNT:
      return {
        ...state,
        amount: payload,
      };
    case CONST.TRANSACTION_SET_TYPE:
      return {
        ...state,
        type: payload,
      };
    case CONST.TRANSACTION_RESET:
      return initialState;
    case '@@connector/onTipAdded':
      return {
        ...state,
        amount: state.amount + payload.tipAmount,
      };
    case '@@connector/onSaleResponse':
      return initialState;
    case '@@connector/onResetDeviceResponse':
      return initialState;
    case `@@action/${ACTION.TRANSACTION}`:
      return initialState;
    default:
      return state;
  }
};
