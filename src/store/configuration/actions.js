import * as CONST from './constants';

export const setConfiguration = ({ cloverDomain, merchantId, accessToken, friendlyId }) => ({
  type: CONST.CONFIGURATION_SET,
  payload: { cloverDomain, merchantId, accessToken, friendlyId },
});
