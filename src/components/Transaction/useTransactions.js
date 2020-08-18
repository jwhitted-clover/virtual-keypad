import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { selectVisiblePaymentTransactions, hideTransaction } from '../../store';
import { TRANSACTION } from '../../common';
import parseAmounts from './parseAmounts';
import Transaction from './Transaction';

export default () => {
  const dispatch = useDispatch();
  const transactions = useSelector(selectVisiblePaymentTransactions);
  const { addToast } = useToasts();

  useEffect(() => {
    transactions.forEach(transaction => {
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
    });
  }, [addToast, dispatch, transactions]);
};
