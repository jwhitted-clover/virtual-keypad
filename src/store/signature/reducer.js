import * as CONST from './constants';
import initialState from './initialState';

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CONST.SIGNATURE_SET:
      return {
        width: payload?.width || 0,
        height: payload?.height || 0,
        strokes: payload?.strokes || [],
      };
    default:
      return state;
  }
};
