import { createSelector } from 'reselect';

import { ACTION } from '../../common/constants';

export const selectActions = state => state.actions;

export const selectTransactionAction = createSelector(selectActions, actions =>
  actions.find(a => a.type === ACTION.TRANSACTION)
);

export const selectNonTransactionActions = createSelector(selectActions, actions =>
  actions.filter(a => a.type !== ACTION.TRANSACTION)
);
