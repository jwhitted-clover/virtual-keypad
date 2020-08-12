import * as CONST from './constants';

export const setDevices = devices => ({
  type: CONST.DEVICES_SET_LIST,
  payload: devices,
});

export const setDeviceId = deviceId => ({
  type: CONST.DEVICES_SET_SELECTED,
  payload: deviceId,
});
