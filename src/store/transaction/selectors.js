import { createSelector } from 'reselect';

export const selectTransaction = state => state.transaction;

export const selectTransactionAmount = createSelector(selectTransaction, ({ amount }) => amount || 0);

export const selectTransactionType = createSelector(selectTransaction, ({ type }) => type);
