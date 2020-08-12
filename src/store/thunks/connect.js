import Clover from 'remote-pay-cloud';

import { setDeviceId } from '../devices';
import persist from '../../common/persist';
import { REMOTE_APPLICATION_ID } from '../../common/constants';
import { setConnector } from '../connection/actions';

export default deviceId => async (dispatch, getState) => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  await dispatch(setDeviceId(deviceId));

  const state = getState();
  persist(state);

  const {
    configuration: { cloverDomain, merchantId, accessToken, friendlyId },
  } = state;

  const factory = Clover.CloverConnectorFactoryBuilder.createICloverConnectorFactory({
    [Clover.CloverConnectorFactoryBuilder.FACTORY_VERSION]: Clover.CloverConnectorFactoryBuilder.VERSION_12,
  });

  const connector = factory.createICloverConnector(
    new Clover.WebSocketCloudCloverDeviceConfigurationBuilder(REMOTE_APPLICATION_ID, deviceId, merchantId, accessToken)
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
};
