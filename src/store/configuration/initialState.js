import QS from 'query-string';

import { DOMAIN } from '../../common/constants';
import * as Storage from '../../common/Storage';

const qs = QS.parse(window.location.search);
const hash = QS.parse(window.location.hash);
const storage = Storage.get();

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
  employeeId: qs.employee_id || storage?.configuration?.employeeId || '',
  accessToken: hash.access_token || storage?.configuration?.accessToken || '',
  friendlyId: storage?.configuration?.friendlyId || 'Virtual Keypad',
  loading: undefined,
};
