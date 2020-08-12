import * as CONST from './constants';

export const setPayment = payment => ({
  type: CONST.PAYMENT_SET,
  payload: payment,
});
