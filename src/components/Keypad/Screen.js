import React from 'react';
import { useSelector } from 'react-redux';
import { sentenceCase } from 'change-case';

import { currency } from '../../common';
import { selectStatus, selectBuffer, selectTransactionType, selectTransactionAmount } from '../../store';
import Signature from './Signature';

export default () => {
  const status = useSelector(selectStatus);
  const buffer = useSelector(selectBuffer);
  const tranType = useSelector(selectTransactionType);
  const tranAmount = useSelector(selectTransactionAmount);

  return (
    <div className="Screen alert alert-secondary">
      {!!tranAmount && (
        <div className="Transaction d-flex justify-content-between bg-white rounded-top border-bottom border-secondary">
          <div className="font-italic">{sentenceCase(tranType)}</div>
          <div className="font-weight-bold">{currency(tranAmount)}</div>
        </div>
      )}
      {!buffer && <div>{status}</div>}
      <Signature />
      {buffer && <div className="text-muted">{buffer}</div>}
      {buffer && <h3 className="text-right">{currency(buffer)}</h3>}
    </div>
  );
};
