import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { useTranslation } from 'react-i18next';
import QS from 'query-string';

import { configure, selectConfiguration, selectConfigurationLoading } from '../../store';
import { selectVisible } from './selectors';
import { TextField, CheckboxField } from '../Fields';
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
      <Card className="Configuration">
        <CardHeader>
          <Logo />
          <h3>{t('Virtual Keypad')}</h3>
        </CardHeader>
        <CardBody>
          <TextField
            id="cloverDomain"
            type="url"
            label={t('Clover Domain')}
            value={cloverDomain}
            onChange={setCloverDomain}
            disabled={disabled}
          />
          <TextField
            id="merchantId"
            label={t('Merchant ID')}
            pattern="^[a-zA-Z0-9]{13}$"
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            value={merchantId}
            onChange={setMerchantId}
            disabled={disabled}
          />
          <TextField
            id="accessToken"
            label={t('Access Token')}
            pattern="^[a-fA-F0-9]{8}(-?[a-fA-F0-9]{4}){3}-?[a-fA-F0-9]{12}$"
            autoCorrect="off"
            autoComplete="off"
            autoCapitalize="off"
            spellCheck="false"
            value={accessToken}
            onChange={setAccessToken}
            disabled={disabled}
          />
          <TextField
            id="friendlyId"
            label={t('Friendly ID')}
            value={friendlyId}
            onChange={setFriendlyId}
            disabled={disabled}
          />
          <CheckboxField
            switch
            id="manualCardEntry"
            label={t('Allow Manual Card Entry')}
            checked={manualCardEntry}
            onChange={setManualCardEntry}
            disabled={disabled}
          />
          <CheckboxField
            switch
            id="autoConnect"
            label={t('Auto-connect')}
            checked={autoConnect}
            onChange={setAutoConnect}
            disabled={disabled}
          />
        </CardBody>
        <CardFooter>
          <Button type="submit" color="success" disabled={disabled}>
            {t('Submit')}
          </Button>
          <Button type="reset" color="secondary" className="ml-2" disabled={disabled}>
            {t('Reset')}
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
};
