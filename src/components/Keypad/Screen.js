import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';

import { currency } from '../../common';
import { selectStatus, selectBuffer, selectActiveTransactionType, selectActiveTransactionAmount } from '../../store';
import Signature from './Signature';

export default () => {
  const { t } = useTranslation();
  const status = useSelector(selectStatus);
  const buffer = useSelector(selectBuffer);
  const tranType = useSelector(selectActiveTransactionType);
  const tranAmount = useSelector(selectActiveTransactionAmount);

  const translatedStatus = useMemo(() => {
    const partial = status.match(/^Partial authorization for (.+)\nContinue with transaction\?$/);
    if (partial) {
      const [, amount] = partial;
      return (
        <Trans i18nKey="STATUS~Partial authorization" amount={amount}>
          Partial authorization for {{ amount }}
          Continue with transaction?
        </Trans>
      );
    }
    const cardEnding = status.match(/^Processing Card ending in (\d+)…$/);
    if (cardEnding) {
      const [, last4] = cardEnding;
      return (
        <Trans i18nKey="STATUS~Processing card ending" last4={last4}>
          Processing Card ending in {{ last4 }}…
        </Trans>
      );
    }
    return t([`STATUS~${status}`, status]);
  }, [status, t]);

  return (
    <div className="Screen alert alert-secondary">
      {!!tranAmount && (
        <div className="Transaction d-flex justify-content-between bg-white rounded-top border-bottom border-secondary">
          <div className="font-italic">{t([`TRANSACTION~${tranType}`, tranType])}</div>
          <div className="font-weight-bold">{currency(tranAmount)}</div>
        </div>
      )}
      {!buffer && <div>{translatedStatus}</div>}
      <Signature />
      {buffer && <div className="text-muted">{buffer}</div>}
      {buffer && <h3 className="text-right">{currency(buffer)}</h3>}
    </div>
  );
};
