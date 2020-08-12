import { createSelector } from 'reselect';

export const selectPayment = state => state.payment;

export const selectHasPayment = createSelector(selectPayment, ({ id }) => !!id);

export const selectCardNumber = createSelector(selectPayment, ({ card: { first6, last4 } }) => {
  if (first6 && last4) {
    return [first6, '*'.repeat(6), last4].join('').replace(/.{4}/g, ' $&').trim();
  }
  return '';
});
