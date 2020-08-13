import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectError, setError } from '../../store';
import { selectVisible } from './selectors';
import './styles.scss';

export default () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const visible = useSelector(selectVisible);
  const [expanded, setExpanded] = useState(false);

  const close = useCallback(() => dispatch(setError()), [dispatch]);

  if (!visible) return null;

  return (
    <div className="Error alert alert-danger">
      <button type="button" className="close" onClick={close}>
        &times;
      </button>
      <h3 className="alert-heading">{error.message}</h3>
      {!!error.stack && !expanded && (
        <button type="button" className="btn btn-link btn-sm text-danger" onClick={() => setExpanded(true)}>
          Show details&hellip;
        </button>
      )}
      {!!error.stack && expanded && (
        <pre>
          <code>{error?.stack}</code>
        </pre>
      )}
    </div>
  );
};
