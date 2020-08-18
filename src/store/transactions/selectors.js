import { createSelector } from 'reselect';

export const selectRawTransactions = state => state.transactions;

export const selectTransactions = createSelector(selectRawTransactions, transactions => Object.values(transactions));

export const selectPaymentTransactions = createSelector(selectTransactions, transactions =>
  transactions.filter(t => t.payment)
);

export const selectVisiblePaymentTransactions = createSelector(selectPaymentTransactions, transactions =>
  transactions.filter(t => t.visible)
);
