import { combineReducers } from 'redux';
import configuration from './configuration/reducer';
import connection from './connection/reducer';
import devices from './devices/reducer';
import error from './error/reducer';
import payment from './payment/reducer';
import signature from './signature/reducer';

const rootReducer = combineReducers({ configuration, connection, devices, error, payment, signature });

export default rootReducer;
