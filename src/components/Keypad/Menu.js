import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

import { disconnect, reset, showWelcome } from '../../store';
import { MODE } from './constants';

export default ({ mode, setMode }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const toggle = useCallback(() => setShow(!show), [show, setShow]);

  const onShowWelcome = useCallback(() => dispatch(showWelcome()), [dispatch]);

  const onReset = useCallback(() => dispatch(reset()), [dispatch]);

  const onDisconnect = useCallback(() => dispatch(disconnect()), [dispatch]);

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
      <button type="button" className="btn btn-sm btn-outline-dark text-light" onClick={toggle} title={t('Menu')}>
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
                {t([`MODE~${m}`, m])}
              </label>
            </div>
          </button>
        ))}
        <div className="dropdown-divider" />
        <button className="dropdown-item" type="button" onClick={onShowWelcome}>
          {t('Show Welcome')}
        </button>
        <button className="dropdown-item" type="button" onClick={onReset}>
          {t('Reset Device')}
        </button>
        <button className="dropdown-item" type="button" onClick={onDisconnect}>
          {t('Disconnect')}
        </button>
      </div>
    </div>
  );
};
