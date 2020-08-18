import * as CONST from './constants';
import initialState from './initialState';
import { TRANSACTION } from '../../common';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.TRANSACTIONS_HIDE:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          visible: false,
        },
      };
    case CONST.TRANSACTIONS_SHOW:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          visible: true,
        },
      };
    case CONST.TRANSACTIONS_REMOVE: {
      const newState = { ...state };
      delete newState[payload];
      return newState;
    }
    case CONST.TRANSACTIONS_UPDATE: {
      const cur = state[payload.id] || {};

      return {
        ...state,
        [payload.id]: {
          ...cur,
          id: payload.id,
          visible: payload.visible || cur.visible || false,
          amount: payload.amount || cur.amount || 0,
          tipAmount: payload.tipAmount || cur.tipAmount || 0,
          type: payload.type || cur.type || '',
          payment: payload.payment || cur.payment || null,
        },
      };
    }
    case '@@connector/onSaleResponse': {
      if (payload.success) {
        return {
          ...state,
          [payload.payment.externalPaymentId]: {
            ...state[payload.payment.externalPaymentId],
            id: payload.payment.externalPaymentId,
            visible: true,
            type: TRANSACTION.SALE,
            payment: payload.payment,
          },
        };
      }
      return state;
    }
    case '@@connector/onVoidPaymentResponse': {
      if (payload.success) {
        return {
          ...state,
          [payload.payment.externalPaymentId]: {
            ...state[payload.payment.externalPaymentId],
            id: payload.payment.externalPaymentId,
            visible: true,
            type: TRANSACTION.VOID,
            payment: payload.payment,
          },
        };
      }
      return state;
    }
    default:
      return state;
  }
};
