import * as Storage from '../common/Storage';
import createStore from './createStore';
import { selectConfiguration } from './configuration/selectors';
import { configure } from './thunks';

let initialState;
try {
  initialState = Storage.get();
} catch (e) {
  console.warn('Failed to initialize state from storage', e);
} finally {
  initialState = initialState || undefined;
}

const store = createStore(initialState);

const config = selectConfiguration(store.getState());
store.dispatch(configure(config));

export default store;
