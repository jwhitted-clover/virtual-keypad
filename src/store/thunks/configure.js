import { APP } from '../../common/constants';
import persist from '../../common/persist';
import fetchDevices from '../../common/fetchDevices';
import { setConfiguration } from '../configuration/actions';
import { setDevices } from '../devices/actions';
import { setError } from '../error/actions';

export default ({ cloverDomain, merchantId, accessToken, friendlyId }) => async (dispatch, getState) => {
  try {
    await dispatch(setConfiguration({ cloverDomain, merchantId, accessToken, friendlyId }));
    persist(getState());

    const devices = await fetchDevices({ cloverDomain, merchantId, accessToken });
    await dispatch(setDevices(devices));

    if (!devices.length) {
      throw new Error('Merchant has no devices.');
    }

    if (!devices.some(a => a.apps[APP.CLOUD_PAY_DISPLAY])) {
      throw new Error('Merchant has no devices with Cloud Pay Display installed.');
    }
  } catch (e) {
    await dispatch(setError(e));
  }
};
