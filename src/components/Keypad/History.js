import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { format, compareDesc } from 'date-fns';

import { selectPaymentTransactions } from '../../store';
import { currency } from '../../common';
import { useShowTransaction } from '../Transaction';

const parseAmount = ({ amount, tipAmount, payment }) =>
  currency(payment ? payment.amount + payment.tipAmount : amount + tipAmount);

const parseTimestamp = ({ timestamp }) => (timestamp ? format(timestamp, 'M/d h:mm a') : '??');

export default () => {
  const transactions = useSelector(selectPaymentTransactions);
  const showTransaction = useShowTransaction();

  const sortedTransactions = useMemo(() => transactions.sort((a, b) => compareDesc(a.timestamp, b.timestamp)), [
    transactions,
  ]);

  return (
    <div className="History">
      <table className="table table-sm table-hover table-secondary table-striped">
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th className="text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map(transaction => (
            <tr key={transaction.id} role="button" onClick={() => showTransaction(transaction)}>
              <td>{parseTimestamp(transaction)}</td>
              <td>{transaction.type}</td>
              <td className="text-right">{parseAmount(transaction)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
