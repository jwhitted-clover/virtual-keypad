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
    case '@@connector/onSaleResponse':
      if (payload.success) {
        return {
          id: payload?.payment?.id || '',
          externalId: payload?.payment?.externalPaymentId || '',
          orderId: payload?.payment?.order?.id || '',
          amount: payload?.payment?.amount || 0,
          tipAmount: payload?.payment?.tipAmount || 0,
          card: {
            type: payload?.payment?.cardTransaction?.cardType || '',
            first6: payload?.payment?.cardTransaction?.first6 || '',
            last4: payload?.payment?.cardTransaction?.last4 || '',
            name: payload?.payment?.cardTransaction?.cardholderName || '',
          },
        };
      }
      return initialState;
    case '@@connector/onResetDeviceResponse':
      return initialState;
    default:
      return state;
  }
};
