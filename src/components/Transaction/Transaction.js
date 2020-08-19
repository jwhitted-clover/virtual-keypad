import React from 'react';
import { sentenceCase } from 'change-case';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';

import { currency, card, TRANSACTION } from '../../common';
import { voidPayment, setError, setBuffer, transaction as doTransaction, hideTransaction } from '../../store';
import parseAmounts from './parseAmounts';

export default ({ transaction }) => {
  const { type, payment } = transaction || {};
  const dispatch = useDispatch();
  const { removeToast } = useToasts();

  const amounts = parseAmounts(transaction);

  const onRemaining = async () => {
    try {
      await dispatch(setBuffer(amounts.remaining));
      await dispatch(doTransaction());
    } catch (e) {
      await dispatch(setError(e));
    }
  };

  const onVoid = async () => {
    try {
      removeToast(transaction.id);
      await dispatch(hideTransaction(transaction.id));
      await dispatch(voidPayment(payment));
    } catch (e) {
      await dispatch(setError(e));
    }
  };

  return (
    <div className="Transaction">
      {transaction.type !== TRANSACTION.VOID && amounts.partial && (
        <div className="alert alert-warning">
          <h6 className="alert-heading">Partial Payment</h6>
          <div>Remaining: {currency(amounts.remaining)}</div>
        </div>
      )}
      <h5>{sentenceCase(type || 'Transaction')} Details</h5>
      <table className="table table-sm small mb-0">
        <tbody>
          <tr>
            <th>Payment ID:</th>
            <td>{payment.id}</td>
          </tr>
          <tr>
            <th>External ID:</th>
            <td>{payment.externalPaymentId}</td>
          </tr>
          <tr>
            <th>Order ID:</th>
            <td>{payment.order.id}</td>
          </tr>
          {!!payment.tipAmount && (
            <tr>
              <th>Total:</th>
              <td>{currency(payment.amount + payment.tipAmount)}</td>
            </tr>
          )}
          <tr>
            <th>Amount:</th>
            <td>{currency(payment.amount)}</td>
          </tr>
          {!!payment.tipAmount && (
            <tr>
              <th>Tip:</th>
              <td>{currency(payment.tipAmount)}</td>
            </tr>
          )}
          <tr>
            <th>Card:</th>
            <td>
              <div>{payment.cardType}</div>
              <div>{card(payment.cardTransaction)}</div>
              {payment.cardTransaction.cardholderName && <div>{payment.cardTransaction.cardholderName}</div>}
            </td>
          </tr>
        </tbody>
      </table>
      {transaction.type === TRANSACTION.SALE && (
        <div>
          {amounts.partial && (
            <button className="btn btn-primary btn-sm mr-1" onClick={onRemaining}>
              Process {currency(amounts.remaining)}
            </button>
          )}
          <button key="void" className="btn btn-danger btn-sm" onClick={onVoid}>
            Void
          </button>
        </div>
      )}
    </div>
  );
};
