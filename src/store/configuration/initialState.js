import QS from 'query-string';

import { DOMAIN, STORAGE } from '../../common/constants';

const qs = QS.parse(window.location.search);
const hash = QS.parse(window.location.hash);
const storage = JSON.parse(atob(localStorage.getItem(STORAGE) || 'bnVsbA=='));

const getCloverDomain = () => {
  if (storage?.configuration?.cloverDomain) {
    return storage?.configuration?.cloverDomain;
  }
  if (document.referrer) {
    const referrer = new URL(document.referrer);
    if (referrer.origin.includes('clover.com')) {
      return referrer.toString();
    }
  }
  return DOMAIN;
};

export default {
  cloverDomain: getCloverDomain(),
  merchantId: qs.merchant_id || storage?.configuration?.merchantId || '',
  accessToken: hash.access_token || storage?.configuration?.accessToken || '',
  friendlyId: 'Virtual Keypad',
  loading: undefined,
};
