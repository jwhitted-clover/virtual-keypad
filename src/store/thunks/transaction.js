import Clover from 'remote-pay-cloud';

import { TRANSACTION, ACTION } from '../../common/constants';
import { setError } from '../error/actions';
import { selectConnector } from '../connection/selectors';
import { selectBuffer } from '../buffer/selectors';
import { setTransactionType, setTransactionAmount } from '../transaction/actions';
import { setActions } from '../actions/actions';
import { setStatus } from '../status/actions';
import { resetBuffer } from '../buffer/actions';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: `@@action/${ACTION.TRANSACTION}` });

    const state = getState();
    const buffer = selectBuffer(state);
    const connector = selectConnector(state);

    dispatch(setActions());
    dispatch(setStatus('Processing...'));
    dispatch(resetBuffer());

    const amount = +buffer;
    if (!amount) throw new Error('Amount is required');
    if (isNaN(amount)) throw new Error('Amount is invalid');
    if (amount < 0 || amount > 99_999_99) throw new Error('Amount must between 0.00 and 99,999.99');

    dispatch(setTransactionType(TRANSACTION.SALE));
    dispatch(setTransactionAmount(amount));

    const request = new Clover.remotepay.SaleRequest();
    request.setAmount(amount);
    request.setExternalId(Clover.CloverID.getNewId());
    request.setCardEntryMethods(Clover.CardEntryMethods.DEFAULT);
    connector.sale(request);
  } catch (e) {
    dispatch(setError(e));
    dispatch({ type: '@@connector/onDeviceReady' });
  }
};
