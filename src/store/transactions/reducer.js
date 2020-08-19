import * as CONST from './constants';
import initialState from './initialState';
import { TRANSACTION } from '../../common';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.TRANSACTIONS_ACTIVE: {
      if (payload.id) {
        const cur = state.data[payload.id] || {};

        return {
          ...state,
          active: payload.id,
          data: {
            ...state.data,
            [payload.id]: {
              ...state.data[payload.id],
              id: payload.id,
              timestamp: Date.now(),
              type: payload.type || cur.type,
              amount: payload.amount || cur.amount || 0,
              tipAmount: payload.tipAmount || cur.tipAmount || 0,
            },
          },
        };
      }
      return {
        ...state,
        active: '',
      };
    }
    case CONST.TRANSACTIONS_HIDE:
      return {
        ...state,
        data: {
          ...state.data,
          [payload]: {
            ...state.data[payload],
            visible: false,
          },
        },
      };
    case CONST.TRANSACTIONS_SHOW:
      return {
        ...state,
        data: {
          ...state.data,
          [payload]: {
            ...state.data[payload],
            visible: true,
          },
        },
      };
    case CONST.TRANSACTIONS_REMOVE: {
      const newState = {
        ...state,
        data: { ...state.data },
      };
      delete newState.data[payload];
      return newState;
    }
    case CONST.TRANSACTIONS_UPDATE: {
      const cur = state.data[payload.id] || {};

      return {
        ...state,
        data: {
          ...state.data,
          [payload.id]: {
            ...cur,
            id: payload.id,
            timestamp: Date.now(),
            visible: payload.visible || cur.visible || false,
            amount: payload.amount || cur.amount || 0,
            tipAmount: payload.tipAmount || cur.tipAmount || 0,
            type: payload.type || cur.type || '',
            payment: payload.payment || cur.payment || null,
          },
        },
      };
    }
    case '@@connector/onSaleResponse': {
      if (payload.success) {
        return {
          ...state,
          active: '',
          data: {
            ...state.data,
            [payload.payment.externalPaymentId]: {
              ...state.data[payload.payment.externalPaymentId],
              id: payload.payment.externalPaymentId,
              timestamp: Date.now(),
              visible: true,
              type: TRANSACTION.SALE,
              payment: payload.payment,
            },
          },
        };
      }
      return state;
    }
    case '@@connector/onVoidPaymentResponse': {
      if (payload.success) {
        return {
          ...state,
          active: '',
          data: {
            ...state.data,
            [payload.payment.externalPaymentId]: {
              ...state.data[payload.payment.externalPaymentId],
              id: payload.payment.externalPaymentId,
              timestamp: Date.now(),
              visible: true,
              type: TRANSACTION.VOID,
              payment: payload.payment,
            },
          },
        };
      }
      return state;
    }

    default:
      return state;
  }
};