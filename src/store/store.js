import { STORAGE } from '../common/constants';
import createStore from './createStore';

let initialState;
try {
  initialState = JSON.parse(localStorage.getItem(STORAGE));
} catch (e) {
  console.warn('Failed to initialize state from storage', e);
} finally {
  initialState = initialState || undefined;
}

export default createStore(initialState);
