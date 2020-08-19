export const deviceApps = ({ cloverDomain, merchantId, deviceId, accessToken }) =>
  fetch(
    new URL(
      `/v2/merchant/${merchantId}/device/${deviceId}/current_apps?access_token=${accessToken}`,
      cloverDomain
    ).toString(),
    {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
    }
  ).then(r => r.json());

export const devices = ({ cloverDomain, merchantId, accessToken }) =>
  fetch(new URL(`/v3/merchants/${merchantId}/devices?access_token=${accessToken}`, cloverDomain).toString(), {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
  }).then(r => r.json());