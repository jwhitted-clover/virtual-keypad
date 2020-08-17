import * as CONST from './constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.CONFIGURATION_SET:
      return {
        cloverDomain: payload.cloverDomain || '',
        merchantId: payload.merchantId || '',
        accessToken: payload.accessToken || '',
        friendlyId: payload.friendlyId || '',
        autoConnect: payload.autoConnect || false,
      };
    default:
      return state;
  }
};
