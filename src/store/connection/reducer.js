import * as CONST from './constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.CONNECTION_SET_CONNECTOR:
      try {
        if (state?.connector) {
          state.connector.dispose();
        }
      } catch (e) {
        // Do nothing
      }

      return {
        ...state,
        connector: payload,
        connected: false,
      };
    case '@@connector/onDeviceDisconnected':
      return { ...state, connected: false };
    case '@@connector/onDeviceReady':
      return { ...state, connected: true };
    default:
      return state;
  }
};
