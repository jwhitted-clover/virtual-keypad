import Clover from 'remote-pay-cloud';

import { ACTION, TRANSACTION } from '../../common/constants';
import { setError } from '../error/actions';
import { selectConnector } from '../connection/selectors';
import { setTransactionType, setTransactionAmount } from '../transaction/actions';
import { setActions } from '../actions/actions';
import { setStatus } from '../status/actions';
import { selectPayment } from '../payment/selectors';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: `@@action/${ACTION.VOID_PAYMENT}` });

    const state = getState();
    const { id, orderId, amount, tipAmount } = selectPayment(state);
    const connector = selectConnector(state);

    dispatch(setActions());
    dispatch(setStatus('Processing...'));
    if (!id) throw new Error('No payment was specified');

    dispatch(setTransactionType(TRANSACTION.VOID));
    dispatch(setTransactionAmount((amount || 0) + (tipAmount || 0)));

    const request = new Clover.remotepay.VoidPaymentRequest();
    request.setPaymentId(id);
    request.setOrderId(orderId);
    request.setVoidReason(Clover.order.VoidReason.USER_CANCEL);
    connector.voidPayment(request);
  } catch (e) {
    dispatch(setError(e));
    dispatch({ type: '@@connector/onDeviceReady' });
  }
};
