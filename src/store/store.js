import { STORAGE } from '../common/constants';
import createStore from './createStore';
import { selectConfiguration } from './configuration/selectors';
import { configure } from './thunks';

let initialState;
try {
  initialState = JSON.parse(atob(localStorage.getItem(STORAGE) || 'bnVsbA==')) || undefined;
} catch (e) {
  console.warn('Failed to initialize state from storage', e);
} finally {
  initialState = initialState || undefined;
}

const store = createStore(initialState);

const config = selectConfiguration(store.getState());
store.dispatch(configure(config));

export default store;
