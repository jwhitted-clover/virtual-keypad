import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { configure, selectConfiguration } from '../../store';
import { selectVisible } from './selectors';
import { Logo } from '../SVG';

export default () => {
  const dispatch = useDispatch();
  const configuration = useSelector(selectConfiguration);
  const visible = useSelector(selectVisible);

  const [cloverDomain, setCloverDomain] = useState(configuration.cloverDomain);
  const [merchantId, setMerchantId] = useState(configuration.merchantId);
  const [accessToken, setAccessToken] = useState(configuration.accessToken);
  const [friendlyId, setFriendlyId] = useState(configuration.friendlyId);

  const [disabled, setDisabled] = useState();

  const submit = useCallback(
    async event => {
      try {
        event.preventDefault();
        setDisabled(true);
        await dispatch(configure({ cloverDomain, merchantId, accessToken, friendlyId }));
      } finally {
        setDisabled(false);
      }
    },
    [dispatch, cloverDomain, merchantId, accessToken, friendlyId]
  );

  const reset = useCallback(
    event => {
      event.preventDefault();
      setCloverDomain(configuration.cloverDomain);
      setMerchantId(configuration.merchantId);
      setAccessToken(configuration.accessToken);
      setFriendlyId(configuration.friendlyId);
    },
    [configuration, setCloverDomain, setMerchantId, setAccessToken, setFriendlyId]
  );

  if (!visible) return null;

  return (
    <form onSubmit={submit} onReset={reset}>
      <div className="Configuration card">
        <div className="card-header">
          <Logo />
          <h3>Virtual Keypad</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>Clover Domain:</label>
            <input
              type="text"
              className="form-control"
              value={cloverDomain}
              onChange={event => setCloverDomain(event.target.value)}
              disabled={disabled}
            />
          </div>
          <div className="form-group">
            <label>Merchant ID:</label>
            <input
              type="text"
              className="form-control"
              value={merchantId}
              onChange={event => setMerchantId(event.target.value)}
              disabled={disabled}
            />
          </div>
          <div className="form-group">
            <label>Access Token:</label>
            <input
              type="text"
              className="form-control"
              value={accessToken}
              onChange={event => setAccessToken(event.target.value)}
              disabled={disabled}
            />
          </div>
          <div className="form-group">
            <label>Friendly ID:</label>
            <input
              type="text"
              className="form-control"
              value={friendlyId}
              onChange={event => setFriendlyId(event.target.value)}
              disabled={disabled}
            />
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-success" disabled={disabled}>
            Submit
          </button>
          <button type="reset" className="btn btn-secondary ml-2" disabled={disabled}>
            Reset
          </button>
        </div>
      </div>
    </form>
  );
};
