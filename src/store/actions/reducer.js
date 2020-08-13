import { ACTION } from '../../common/constants';
import * as CONST from './constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.ACTIONS_APPEND: {
      const found = state.some(a => a.type === payload.type && a.payload?.description === payload.payload?.description);
      return found ? state : [...state, payload];
    }
    case CONST.ACTIONS_SET:
      return payload || [];
    case '@@connector/onDeviceReady':
      return [{ type: ACTION.IDENTIFY }, { type: ACTION.RESET }, { type: ACTION.TRANSACTION }];
    case '@@connector/onResetDeviceResponse':
      return [{ type: ACTION.IDENTIFY }, { type: ACTION.RESET }, { type: ACTION.TRANSACTION }];
    case '@@connector/onDeviceActivityStart':
      return payload.inputOptions.map(io => ({ type: ACTION.INVOKE_INPUT_OPTION, payload: io }));
    case '@@connector/onSaleResponse':
      return [{ type: ACTION.IDENTIFY }, { type: ACTION.RESET }, { type: ACTION.TRANSACTION }];
    case '@@connector/onConfirmPaymentRequest':
      return [
        { type: ACTION.ACCEPT_PAYMENT, payload: { description: 'Accept', ...payload } },
        { type: ACTION.REJECT_PAYMENT, payload: { description: 'Reject', ...payload } },
      ];
    case '@@connector/onVerifySignatureRequest':
      return [
        { type: ACTION.ACCEPT_SIGNATURE, payload: { description: 'Accept', ...payload } },
        { type: ACTION.REJECT_SIGNATURE, payload: { description: 'Reject', ...payload } },
      ];
    default:
      return state;
  }
};
