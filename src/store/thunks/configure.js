import { APP } from '../../common/constants';
import persist from '../../common/persist';
import fetchDevices from '../../common/fetchDevices';
import { setConfiguration, setConfigurationLoading } from '../configuration/actions';
import { setDevices } from '../devices/actions';
import { setError } from '../error/actions';

export default ({ cloverDomain, merchantId, accessToken, friendlyId, autoConnect }) => async (dispatch, getState) => {
  try {
    await dispatch(setConfigurationLoading(true));

    await dispatch(setConfiguration({ cloverDomain, merchantId, accessToken, friendlyId, autoConnect }));
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
  } finally {
    await dispatch(setConfigurationLoading(false));
  }
};
