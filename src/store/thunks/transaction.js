import Clover from 'remote-pay-cloud';

import { resetBuffer } from '../buffer/actions';
import { selectBuffer } from '../buffer/selectors';
import { selectConnector } from '../connection/selectors';
import { selectCardEntryMethods } from '../configuration/selectors';
import { setActions } from '../actions/actions';
import { setError } from '../error/actions';
import { setStatus } from '../status/actions';
import { setTransactionType, setTransactionAmount } from '../transaction/actions';
import { TRANSACTION, ACTION } from '../../common/constants';
import { updateTransaction } from '../transactions';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: `@@action/${ACTION.TRANSACTION}` });

    const state = getState();
    const buffer = selectBuffer(state);
    const connector = selectConnector(state);
    const cardEntryMethods = selectCardEntryMethods(state);

    dispatch(setActions());
    dispatch(setStatus('Processing...'));
    dispatch(resetBuffer());

    const amount = +buffer;
    if (!amount) throw new Error('Amount is required');
    if (isNaN(amount)) throw new Error('Amount is invalid');
    if (amount <= 0 || amount > 99_999_99) throw new Error('Amount must between 0.01 and 99,999.99');

    dispatch(setTransactionType(TRANSACTION.SALE));
    dispatch(setTransactionAmount(amount));

    const id = Clover.CloverID.getNewId();

    const request = new Clover.remotepay.SaleRequest();
    request.setAmount(amount);
    request.setExternalId(id);
    request.setCardEntryMethods(cardEntryMethods);

    dispatch(updateTransaction({ id, type: TRANSACTION.SALE, amount }));

    connector.sale(request);
  } catch (e) {
    dispatch(setError(e));
    dispatch({ type: '@@connector/onDeviceReady' });
  }
};
