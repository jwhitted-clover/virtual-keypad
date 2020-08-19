import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import { disconnect } from '../../store';
import { MODE, MODE_TEXT } from './constants';

export default ({ mode, setMode }) => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggle = useCallback(() => setShow(!show), [show, setShow]);

  const power = useCallback(() => dispatch(disconnect()), [dispatch]);

  useEffect(() => {
    if (show) {
      const hide = () => setShow(false);
      document.addEventListener('click', hide);
      document.addEventListener('touch', hide);
      document.addEventListener('keydown', hide);

      return () => {
        document.removeEventListener('click', hide);
        document.removeEventListener('touch', hide);
        document.removeEventListener('keydown', hide);
      };
    }
    return undefined;
  }, [show, setShow]);

  return (
    <div className="dropdown">
      <button type="button" className="btn btn-sm btn-outline-dark text-light" onClick={toggle}>
        ☰
      </button>
      <div className={classNames('dropdown-menu dropdown-menu-right', { show })}>
        {Object.values(MODE).map(m => (
          <button key={m} className="dropdown-item" type="button" onClick={() => setMode(m)}>
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id={`chkMode-${m}`}
                checked={m === mode}
                readOnly
              />
              <label className="custom-control-label" htmlFor={`chkMode-${m}`}>
                {MODE_TEXT[m]}
              </label>
            </div>
          </button>
        ))}
        <div className="dropdown-divider" />
        <button className="dropdown-item" type="button" onClick={power}>
          Disconnect
        </button>
      </div>
    </div>
  );
};
