import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { disconnect } from '../../store';
import { Logo, Power } from '../SVG';
import { selectVisible } from './selectors';

export default () => {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisible);

  const power = useCallback(() => dispatch(disconnect()), [dispatch]);

  if (!visible) return null;

  return (
    <div className="Keypad card">
      <div className="card-header">
        <Logo />
        Virtual Keypad
        <button onClick={power}>
          <Power />
        </button>
      </div>
      <div className="card-body">Coming soon...</div>
    </div>
  );
};
