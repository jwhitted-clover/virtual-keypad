import Clover from 'remote-pay-cloud';

import { clearBuffer } from '../buffer/actions';
import { selectBuffer } from '../buffer/selectors';
import { selectConnector } from '../connection/selectors';
import { selectCardEntryMethods } from '../configuration/selectors';
import { clearActions } from '../actions/actions';
import { setError } from '../error/actions';
import { setStatus } from '../status/actions';
import { TRANSACTION } from '../../common/constants';
import { updateTransaction, setActiveTransaction } from '../transactions';

export default action => async (dispatch, getState) => {
  try {
    dispatch({ ...action, type: 'transaction' });

    const state = getState();
    const buffer = selectBuffer(state);
    const connector = selectConnector(state);
    const cardEntryMethods = selectCardEntryMethods(state);

    dispatch(clearActions());
    dispatch(setStatus('Processing...'));
    dispatch(clearBuffer());

    const amount = +buffer;
    if (!amount) throw new Error('Amount is required');
    if (isNaN(amount)) throw new Error('Amount is invalid');
    if (amount <= 0 || amount > 99_999_99) throw new Error('Amount must between 0.01 and 99,999.99');

    const id = Clover.CloverID.getNewId();
    const type = TRANSACTION.SALE;

    dispatch(setActiveTransaction({ id, type, amount }));

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
