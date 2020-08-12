import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, setError } from '../../store';
import { selectVisible } from './selectors';

export default () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const visible = useSelector(selectVisible);

  const close = useCallback(() => dispatch(setError()), [dispatch]);

  if (!visible) return null;

  return (
    <div className="alert alert-danger">
      <button type="button" className="close" onClick={close}>
        &times;
      </button>
      <h3 className="alert-heading">{error.message}</h3>
      {!!error.stack && (
        <pre>
          <code>{error?.stack}</code>
        </pre>
      )}
    </div>
  );
};
