import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { disconnect } from '../../store';
import { Logo, Power } from '../SVG';
import { selectVisible } from './selectors';
import Screen from './Screen';
import Keys from './Keys';
import './styles.scss';

export default () => {
  const dispatch = useDispatch();
  const visible = useSelector(selectVisible);

  const click = useCallback(() => dispatch(disconnect()), [dispatch]);

  // if (!visible) return null;

  return (
    <div className="Keypad card">
      <div className="card-header">
        <Logo />
        <h3>Virtual Keypad</h3>
        <button className="btn btn-sm btn-outline-dark" onClick={click} title="Disconnect">
          <Power />
        </button>
      </div>
      <div className="card-body">
        <Screen />
        <Keys />
      </div>
    </div>
  );
};
