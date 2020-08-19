import { setConnector } from '../connection/actions';
import { selectConnector } from '../connection/selectors';
import { setError } from '../error/actions';
import { setDevices } from '../devices/actions';
import { setActiveTransaction } from '../transactions/actions';

export default () => async (dispatch, getState) => {
  try {
    const connector = selectConnector(getState());
    connector.dispose();

    dispatch(setConnector());
    dispatch(setDevices());
    dispatch(setActiveTransaction());
  } catch (e) {
    dispatch(setError(e));
  }
};
