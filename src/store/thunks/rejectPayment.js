import { ACTION } from '../../common/constants';
import { setError } from '../error/actions';
import { setActions } from '../actions/actions';
import { selectConnector } from '../connection/selectors';
import { setStatus } from '../status/actions';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: `@@action/${ACTION.REJECT_PAYMENT}` });
    dispatch(setStatus('Rejecting payment...'));
    dispatch(setActions());

    const connector = selectConnector(getState());
    connector.rejectPayment(action.payload.payment, action.payload.challenges[0]);
  } catch (e) {
    dispatch(setError(e));
  }
};
