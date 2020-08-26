import * as CONST from './constants';

export const setConfiguration = ({ cloverDomain, merchantId, accessToken, friendlyId }) => ({
  type: CONST.CONFIGURATION_SET,
  payload: { cloverDomain, merchantId, accessToken, friendlyId },
});

export const setConfigurationLoading = () => ({ type: CONST.CONFIGURATION_LOADING });

export const setConfigurationNotLoading = () => ({ type: CONST.CONFIGURATION_NOT_LOADING });
