import * as CONST from './constants';

export const setConnector = connector => ({
  type: CONST.CONNECTION_SET_CONNECTOR,
  payload: connector,
});
