import * as CONST from './constants';

export const setSignature = signature => ({
  type: CONST.SIGNATURE_SET,
  payload: signature,
});
