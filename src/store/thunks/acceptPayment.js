import { ACTION } from '../../common/constants';
import { setError } from '../error/actions';
import { setActions } from '../actions/actions';
import { selectConnector } from '../connection/selectors';
import { setStatus } from '../status/actions';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: `@@action/${ACTION.ACCEPT_PAYMENT}` });
    dispatch(setStatus('Accepting payment...'));
    dispatch(setActions());

    const connector = selectConnector(getState());
    connector.acceptPayment(action.payload.payment);
  } catch (e) {
    dispatch(setError(e));
  }
};
