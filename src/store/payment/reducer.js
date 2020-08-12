import * as CONST from './constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.PAYMENT_SET:
      return {
        id: payload?.id || '',
        externalId: payload?.externalPaymentId || '',
        orderId: payload?.order?.id || '',
        amount: payload?.amount || 0,
        tipAmount: payload?.tipAmount || 0,
        card: {
          type: payload?.cardTransaction?.cardType || '',
          first6: payload?.cardTransaction?.first6 || '',
          last4: payload?.cardTransaction?.last4 || '',
          name: payload?.cardTransaction?.cardholderName || '',
        },
      };
    default:
      return state;
  }
};
