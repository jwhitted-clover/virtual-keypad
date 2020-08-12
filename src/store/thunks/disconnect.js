import { setConnector } from '../connection/actions';
import { selectConnector } from '../connection/selectors';
import { setError } from '../error/actions';
import { setDevices } from '../devices/actions';

export default () => async (dispatch, getState) => {
  try {
    const connector = selectConnector(getState());
    connector.dispose();

    await dispatch(setConnector());
    await dispatch(setDevices());
  } catch (e) {
    dispatch(setError(e));
  }
};
