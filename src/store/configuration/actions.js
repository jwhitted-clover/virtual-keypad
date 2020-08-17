import * as CONST from './constants';

export const setConfigurationLoading = loading => ({
  type: CONST.CONFIGURATION_LOADING,
  payload: loading,
});

export const setConfiguration = ({ cloverDomain, merchantId, accessToken, friendlyId, autoConnect }) => ({
  type: CONST.CONFIGURATION_SET,
  payload: { cloverDomain, merchantId, accessToken, friendlyId, autoConnect },
});
