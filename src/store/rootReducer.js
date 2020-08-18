import { combineReducers } from 'redux';
import actions from './actions/reducer';
import buffer from './buffer/reducer';
import configuration from './configuration/reducer';
import connection from './connection/reducer';
import devices from './devices/reducer';
import error from './error/reducer';
import payment from './payment/reducer';
import signature from './signature/reducer';
import status from './status/reducer';
import transaction from './transaction/reducer';
import transactions from './transactions/reducer';

const rootReducer = combineReducers({
  actions,
  buffer,
  configuration,
  connection,
  devices,
  error,
  payment,
  signature,
  status,
  transaction,
  transactions,
});

export default rootReducer;
