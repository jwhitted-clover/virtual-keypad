import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import QS from 'query-string';

import { configure, selectConfiguration, selectConfigurationLoading } from '../../store';
import { selectVisible } from './selectors';
import { Logo } from '../SVG';

export default () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const configuration = useSelector(selectConfiguration);
  const loading = useSelector(selectConfigurationLoading);
  const visible = useSelector(selectVisible);

  const qs = QS.parse(window.location.search);
  const hash = QS.parse(window.location.hash);

  const [cloverDomain, setCloverDomain] = useState(configuration.cloverDomain || 'https://www.clover.com');
  const [merchantId, setMerchantId] = useState(qs.merchant_id || configuration.merchantId);
  const [accessToken, setAccessToken] = useState(hash.access_token || configuration.accessToken);
  const [friendlyId, setFriendlyId] = useState(configuration.friendlyId || t('Virtual Keypad'));
  const [manualCardEntry, setManualCardEntry] = useState(configuration.manualCardEntry || false);
  const [autoConnect, setAutoConnect] = useState(configuration.autoConnect || false);

  const [submitting, setSubmitting] = useState(false);

  const disabled = useMemo(() => loading || submitting, [loading, submitting]);

  const submit = useCallback(
    async event => {
      try {
        event.preventDefault();
        setSubmitting(true);
        await dispatch(configure({ cloverDomain, merchantId, accessToken, friendlyId, manualCardEntry, autoConnect }));
      } finally {
        setSubmitting(false);
      }
    },
    [dispatch, cloverDomain, merchantId, accessToken, friendlyId, manualCardEntry, autoConnect]
  );

  const reset = useCallback(
    event => {
      event.preventDefault();
      setCloverDomain(configuration.cloverDomain);
      setMerchantId(configuration.merchantId);
      setAccessToken(configuration.accessToken);
      setFriendlyId(configuration.friendlyId);
      setManualCardEntry(configuration.manualCardEntry);
      setAutoConnect(configuration.autoConnect);
    },
    [configuration, setCloverDomain, setMerchantId, setAccessToken, setFriendlyId, setManualCardEntry, setAutoConnect]
  );

  if (!visible) return null;

  return (
    <form onSubmit={submit} onReset={reset}>
      <div className="Configuration card">
        <div className="card-header">
          <Logo />
          <h3>{t('Virtual Keypad')}</h3>
        </div>
        <div className="card-body">
          <div className="form-group">
            <label>{t('Clover Domain')}:</label>
            <input
              type="text"
              className="form-control"
              value={cloverDomain}
              onChange={event => setCloverDomain(event.target.value)}
              disabled={disabled}
            />
          </div>
          <div className="form-group">
            <label>{t('Merchant ID')}:</label>
            <input
              type="text"
              className="form-control"
              value={merchantId}
              onChange={event => setMerchantId(event.target.value)}
              disabled={disabled}
            />
          </div>
          <div className="form-group">
            <label>{t('Access Token')}:</label>
            <input
              type="text"
              className="form-control"
              value={accessToken}
              onChange={event => setAccessToken(event.target.value)}
              disabled={disabled}
            />
          </div>
          <div className="form-group">
            <label>{t('Friendly ID')}:</label>
            <input
              type="text"
              className="form-control"
              value={friendlyId}
              onChange={event => setFriendlyId(event.target.value)}
              disabled={disabled}
            />
          </div>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input
                id="chkManualCardEntry"
                type="checkbox"
                className="custom-control-input"
                disabled={disabled}
                checked={manualCardEntry}
                onChange={() => setManualCardEntry(!manualCardEntry)}
              />
              <label className="custom-control-label font-weight-normal" htmlFor="chkManualCardEntry">
                {t('Allow Manual Card Entry')}
              </label>
            </div>
          </div>
          <div className="form-group">
            <div className="custom-control custom-switch">
              <input
                id="chkAutoConnect"
                type="checkbox"
                className="custom-control-input"
                disabled={disabled}
                checked={autoConnect}
                onChange={() => setAutoConnect(!autoConnect)}
              />
              <label className="custom-control-label font-weight-normal" htmlFor="chkAutoConnect">
                {t('Auto-connect')}
              </label>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button type="submit" className="btn btn-success" disabled={disabled}>
            {t('Submit')}
          </button>
          <button type="reset" className="btn btn-secondary ml-2" disabled={disabled}>
            {t('Reset')}
          </button>
        </div>
      </div>
    </form>
  );
};
