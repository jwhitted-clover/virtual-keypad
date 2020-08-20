import { ACTION } from '../../common/constants';
import { selectConnector } from '../connection/selectors';
import { selectFriendlyId } from '../configuration/selectors';
import { setActions } from '../actions/actions';
import { setError } from '../error/actions';
import { setStatus } from '../status/actions';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: 'identify' });
    dispatch(setStatus('Identifying...'));
    dispatch(
      setActions([
        { type: ACTION.SHOW_WELCOME, payload: { description: 'OK' } },
        { type: ACTION.DISCONNECT, payload: { description: 'Cancel' } },
      ])
    );

    const state = getState();
    const connector = selectConnector(state);
    const friendlyId = selectFriendlyId(state);

    connector.showMessage(`${friendlyId} connected`);
  } catch (e) {
    dispatch(setError(e));
  }
};
