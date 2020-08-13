import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { currency, card } from '../../common';
import { selectPayment, setPayment } from '../../store';
import './styles.scss';

export default () => {
  const dispatch = useDispatch();
  const payment = useSelector(selectPayment);

  const close = useCallback(() => dispatch(setPayment()), [dispatch]);

  if (!payment.id) return null;

  return (
    <div className="Payment alert alert-success">
      <button type="button" className="close" onClick={close}>
        &times;
      </button>
      <h4 className="alert-heading">Payment Details</h4>
      <table className="table table-sm small mb-0">
        <tbody>
          <tr>
            <th>Payment ID:</th>
            <td>{payment.id}</td>
          </tr>
          <tr>
            <th>External ID:</th>
            <td>{payment.externalId}</td>
          </tr>
          <tr>
            <th>Order ID:</th>
            <td>{payment.orderId}</td>
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
              <div>{card(payment.card)}</div>
              {payment.card.name && <div>{payment.card.name}</div>}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
