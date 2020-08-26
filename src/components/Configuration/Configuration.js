import React, { useCallback, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Card, CardHeader, CardBody, CardFooter } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import { configure, selectConfiguration, selectConfigurationLoading } from '../../store';
import { selectVisible } from './selectors';
import { TextField } from '../Fields';
import { Logo } from '../SVG';

export default () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const configuration = useSelector(selectConfiguration);
  const loading = useSelector(selectConfigurationLoading);
  const visible = useSelector(selectVisible);

  const [cloverDomain, setCloverDomain] = useState(configuration.cloverDomain);
  const [merchantId, setMerchantId] = useState(configuration.merchantId);
  const [accessToken, setAccessToken] = useState(configuration.accessToken);
  const [friendlyId, setFriendlyId] = useState(configuration.friendlyId);

  const [submitting, setSubmitting] = useState(false);

  const disabled = useMemo(() => loading || submitting, [loading, submitting]);

  const submit = useCallback(
    async event => {
      try {
        event.preventDefault();
        setSubmitting(true);
        await dispatch(configure({ cloverDomain, merchantId, accessToken, friendlyId }));
      } finally {
        setSubmitting(false);
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
      <Card className="Configuration">
        <CardHeader>
          <Logo />
          <h3>{t('Virtual Keypad')}</h3>
        </CardHeader>
        {loading && (
          <CardBody>
            <p>Loading...</p>
          </CardBody>
        )}
        {!loading && (
          <>
            <CardBody>
              <TextField
                id="cloverDomain"
                type="url"
                label={t('Clover Domain')}
                autoCorrect="off"
                autoComplete="off"
                autoCapitalize="off"
                spellCheck="false"
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
            </CardBody>
            <CardFooter>
              <Button type="submit" color="success" disabled={disabled}>
                {t('Submit')}
              </Button>
              <Button type="reset" color="secondary" className="ml-2" disabled={disabled}>
                {t('Reset')}
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </form>
  );
};
