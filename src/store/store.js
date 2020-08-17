import { STORAGE } from '../common/constants';
import createStore from './createStore';
import { selectAutoConnect, selectConfiguration } from './configuration/selectors';
import { configure } from './thunks';

let initialState;
try {
  initialState = JSON.parse(localStorage.getItem(STORAGE));
} catch (e) {
  console.warn('Failed to initialize state from storage', e);
} finally {
  initialState = initialState || undefined;
}

const store = createStore(initialState);

const state = store.getState();
if (selectAutoConnect(state)) {
  const config = selectConfiguration(state);
  store.dispatch(configure(config));
}

export default store;
