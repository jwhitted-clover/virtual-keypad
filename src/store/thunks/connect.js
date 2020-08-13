import Clover from 'remote-pay-cloud';

import { setDeviceId, selectDevices } from '../devices';
import persist from '../../common/persist';
import { REMOTE_APPLICATION_ID, APP } from '../../common/constants';
import { setConnector } from '../connection/actions';
import { selectConfiguration } from '../configuration';
import { setError } from '../error';

export default deviceId => async (dispatch, getState) => {
  try {
    await new Promise(resolve => setTimeout(resolve, 1000));
    await dispatch(setDeviceId(deviceId));

    const state = getState();
    persist(state);

    const { cloverDomain, merchantId, accessToken, friendlyId } = selectConfiguration(state);
    const device = selectDevices(state).find(d => d.id === deviceId);

    if (!device) throw new Error(`Device not found.`);
    if (!device.apps[APP.CLOUD_PAY_DISPLAY]) throw new Error('Device does not have Cloud Pay Display installed.');

    const factory = Clover.CloverConnectorFactoryBuilder.createICloverConnectorFactory({
      [Clover.CloverConnectorFactoryBuilder.FACTORY_VERSION]: Clover.CloverConnectorFactoryBuilder.VERSION_12,
    });

    const connector = factory.createICloverConnector(
      new Clover.WebSocketCloudCloverDeviceConfigurationBuilder(
        REMOTE_APPLICATION_ID,
        deviceId,
        merchantId,
        accessToken
      )
        .setCloverServer(cloverDomain)
        .setFriendlyId(friendlyId)
        .build()
    );

    class Listener extends Clover.remotepay.ICloverConnectorListener {
      constructor() {
        super();
        Object.keys(Object.getPrototypeOf(Object.getPrototypeOf(this))).forEach(type => {
          this[type] = payload => dispatch({ type: `@@connector/${type}`, payload });
        });
      }
    }
    const listener = new Listener();
    connector.addCloverConnectorListener(listener);

    dispatch(setConnector(connector));

    connector.initializeConnection();
  } catch (e) {
    dispatch(setError(e));
  }
};
