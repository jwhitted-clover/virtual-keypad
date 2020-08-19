import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { selectVisiblePaymentTransactions } from '../../store';
import useShowTransaction from './useShowTransaction';

export default () => {
  const transactions = useSelector(selectVisiblePaymentTransactions);
  const showTransaction = useShowTransaction();

  useEffect(() => {
    transactions.forEach(showTransaction);
  }, [transactions, showTransaction]);
};
