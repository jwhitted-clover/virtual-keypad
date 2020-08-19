import React from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { hideTransaction } from '../../store';
import { TRANSACTION } from '../../common';
import parseAmounts from './parseAmounts';
import Transaction from './Transaction';

export default () => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  return transaction => {
    const amounts = parseAmounts(transaction);

    let appearance;
    if (transaction.type === TRANSACTION.VOID) appearance = 'info';
    else if (amounts.final >= amounts.start) appearance = 'success';
    else if (amounts.final < amounts.start) appearance = 'warning';
    else appearance = 'info';

    addToast(<Transaction transaction={transaction} />, {
      id: transaction.id,
      appearance,
      autoDismiss: false,
      onDismiss: () => {
        dispatch(hideTransaction(transaction.id));
      },
    });
  };
};
