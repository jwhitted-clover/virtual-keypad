import Clover from 'remote-pay-cloud';

import * as CONST from './constants';
import initialState from './initialState';

const tryDispose = connector => {
  try {
    // eslint-disable-next-line no-unused-expressions
    connector?.dispose();
  } catch (e) {
    // Do nothing
  }
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.CONNECTION_CLEAR:
      tryDispose(state.connector);
      return initialState;
    case CONST.CONNECTION_SET:
      tryDispose(state.connector);
      return {
        ...state,
        connector: payload,
        connected: false,
      };
    case '@@connector/onDeviceDisconnected':
      return { ...state, connected: false };
    case '@@connector/onDeviceReady': {
      const request = new Clover.remotepay.RetrieveDeviceStatusRequest();
      request.setSendLastMessage(true);
      state.connector.retrieveDeviceStatus(request);

      return { ...state, connected: true };
    }
    default:
      return state;
  }
};
