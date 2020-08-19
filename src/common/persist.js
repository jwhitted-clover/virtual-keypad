import { STORAGE } from './constants';
import initialDevices from '../store/devices/initialState';

export default ({ configuration, devices }) =>
  localStorage.setItem(
    STORAGE,
    JSON.stringify({
      configuration: {
        ...configuration,
        loading: undefined,
      },
      devices: {
        ...initialDevices,
        selected: devices.selected,
      },
    })
  );