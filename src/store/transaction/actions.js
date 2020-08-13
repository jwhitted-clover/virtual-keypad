import * as CONST from './constants';

export const resetTransaction = () => ({ type: CONST.TRANSACTION_RESET });

export const setTransactionAmount = amount => ({
  type: CONST.TRANSACTION_SET_AMOUNT,
  payload: amount,
});

export const addTransactionAmount = amount => ({
  type: CONST.TRANSACTION_ADD_AMOUNT,
  payload: amount,
});

export const setTransactionType = type => ({
  type: CONST.TRANSACTION_SET_TYPE,
  payload: type,
});
