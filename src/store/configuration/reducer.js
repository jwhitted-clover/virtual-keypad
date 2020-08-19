import * as CONST from './constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.CONFIGURATION_LOADING:
      return {
        ...state,
        loading: payload || undefined,
      };
    case CONST.CONFIGURATION_SET:
      return {
        ...state,
        cloverDomain: payload.cloverDomain || '',
        merchantId: payload.merchantId || '',
        accessToken: payload.accessToken || '',
        friendlyId: payload.friendlyId || '',
        manualCardEntry: payload.manualCardEntry || false,
        autoConnect: payload.autoConnect || false,
      };
    default:
      return state;
  }
};
