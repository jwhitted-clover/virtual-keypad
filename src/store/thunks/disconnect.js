import { setConnector } from '../connection/actions';
import { selectConnector } from '../connection/selectors';
import { setError } from '../error/actions';
import { setDevices } from '../devices/actions';
import { resetTransaction } from '../transaction/actions';

export default () => async (dispatch, getState) => {
  try {
    const connector = selectConnector(getState());
    connector.dispose();

    dispatch(setConnector());
    dispatch(setDevices());
    dispatch(resetTransaction());
  } catch (e) {
    dispatch(setError(e));
  }
};
