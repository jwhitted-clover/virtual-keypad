import React from 'react';
import { useDispatch } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import { useTranslation } from 'react-i18next';

import { currency, card, TRANSACTION } from '../../common';
import { voidPayment, setError, setBuffer, transaction as doTransaction, hideTransaction } from '../../store';
import parseAmounts from './parseAmounts';

export default ({ transaction }) => {
  const { type, payment } = transaction || {};
  const { t } = useTranslation();
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
          <h6 className="alert-heading">{t('Partial Payment')}</h6>
          <div>
            {t('Remaining')}: {currency(amounts.remaining)}
          </div>
        </div>
      )}
      <h5>
        {t([`TRANSACTION~${type}`, type])} {t('Details')}
      </h5>
      <table className="table table-sm small mb-0">
        <tbody>
          <tr>
            <th>{t('Payment ID')}:</th>
            <td>{payment.id}</td>
          </tr>
          {payment.externalPaymentId && (
            <tr>
              <th>{t('External ID')}:</th>
              <td>{payment.externalPaymentId}</td>
            </tr>
          )}
          {payment.externalReferenceId && (
            <tr>
              <th>{t('External Ref')}:</th>
              <td>{payment.externalReferenceId}</td>
            </tr>
          )}
          <tr>
            <th>{t('Order ID')}:</th>
            <td>{payment.order?.id || payment.orderRef?.id}</td>
          </tr>
          {!!payment.tipAmount && (
            <tr>
              <th>{t('Total')}:</th>
              <td>{currency(payment.amount + payment.tipAmount)}</td>
            </tr>
          )}
          <tr>
            <th>{t('Amount')}:</th>
            <td>{currency(payment.amount)}</td>
          </tr>
          {!!payment.tipAmount && (
            <tr>
              <th>{t('Tip')}:</th>
              <td>{currency(payment.tipAmount)}</td>
            </tr>
          )}
          <tr>
            <th>{t('Card')}:</th>
            <td>
              <div>{t([`CARD~${payment.cardTransaction.cardType}`, payment.cardTransaction.cardType])}</div>
              <div>{card(payment.cardTransaction)}</div>
              {payment.cardTransaction.cardholderName && (
                <div>
                  {t([
                    `CARDHOLDER_NAME~${payment.cardTransaction.cardholderName}`,
                    payment.cardTransaction.cardholderName,
                  ])}
                </div>
              )}
            </td>
          </tr>
        </tbody>
      </table>
      {transaction.type === TRANSACTION.SALE && (
        <div>
          {amounts.partial && (
            <button className="btn btn-primary btn-sm mr-1" onClick={onRemaining}>
              {t('Process')} {currency(amounts.remaining)}
            </button>
          )}
          <button key="void" className="btn btn-danger btn-sm" onClick={onVoid}>
            {t('Void')}
          </button>
        </div>
      )}
    </div>
  );
};
