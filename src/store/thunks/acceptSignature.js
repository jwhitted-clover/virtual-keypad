import Clover from 'remote-pay-cloud';

import { ACTION } from '../../common/constants';
import { setError } from '../error/actions';
import { setActions } from '../actions/actions';
import { selectConnector } from '../connection/selectors';
import { setStatus } from '../status/actions';
import { setSignature } from '../signature/actions';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: `@@action/${ACTION.ACCEPT_SIGNATURE}` });
    dispatch(setStatus('Accepting signature...'));
    dispatch(setActions());
    dispatch(setSignature());

    const connector = selectConnector(getState());
    const request = new Clover.remotepay.VerifySignatureRequest();
    request.setPayment(action.payload.payment);
    connector.acceptSignature(request);
  } catch (e) {
    dispatch(setError(e));
  }
};
