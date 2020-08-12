import { APP_BY_NAME } from './constants';
import * as api from './api';

const appsReducer = (o, a) => {
  const app = APP_BY_NAME[a.appName];
  return app ? { ...o, [app]: true } : o;
};

export default async ({ cloverDomain, merchantId, accessToken }) => {
  const { elements: devices } = await api.devices({ cloverDomain, merchantId, accessToken });
  const apps = await Promise.all(
    devices.map(({ id: deviceId }) =>
      api.deviceApps({
        cloverDomain,
        merchantId,
        accessToken,
        deviceId,
      })
    )
  );
  return devices.map((device, i) => ({
    ...device,
    apps: apps[i].applications.reduce(appsReducer, {}),
  }));
};
