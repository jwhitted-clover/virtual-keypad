import { ACTION } from '../../common/constants';
import { selectConnector } from '../connection/selectors';
import { setActions } from '../actions/actions';
import { setError } from '../error/actions';
import { setStatus } from '../status/actions';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: `@@action/${ACTION.RESET}` });
    dispatch(setStatus('Resetting...'));
    dispatch(setActions());

    const connector = selectConnector(getState());
    connector.resetDevice();
  } catch (e) {
    dispatch(setError(e));
  }
};
