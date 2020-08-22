import React, { forwardRef, useEffect, useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';

export default forwardRef(
  ({ action, height, color, keyCodes, disabled, onClick, moreActions, onMoreClick, children, ...other }, ref) => {
    const { t } = useTranslation();
    const [show, setShow] = useState(false);
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
    }, [show]);

    useEffect(() => {
      if (!disabled) {
        const keydown = event => {
          if (keyCodes.includes(event.code)) {
            event.preventDefault();
            onClick();
            return false;
          }
          return true;
        };
        document.addEventListener('keydown', keydown);

        return () => document.removeEventListener('keydown', keydown);
      }
      return undefined;
    }, [disabled, keyCodes, onClick]);

    const value = useMemo(() => {
      const key = action?.payload?.description || action?.type;
      return key ? t([`ACTION~${key}`, key]) : children;
    }, [action, children, t]);

    const title = useMemo(() => {
      return `${t('Shortcut keys')}: ${keyCodes.map(k => t([`KEY_CODE~${k}`, k])).join(', ')}`;
    }, [keyCodes, t]);

    if (moreActions?.length) {
      return (
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark action rounded-left"
            onClick={onClick}
            disabled={disabled}
            {...other}
            title={title}
          >
            {value || <span>&nbsp;</span>}
          </button>
          <button
            type="button"
            className="btn btn-dark action dropdown-toggle"
            onClick={() => setShow(!show)}
            disabled={disabled}
          ></button>
          <div className={classNames('dropdown-menu bg-dark', { show })}>
            {moreActions.map((a, i) => (
              <button key={i} className="dropdown-item bg-dark text-light" onClick={() => onMoreClick(a)}>
                {t([`ACTION~${a.payload?.description || a.type}`, a.payload?.description || a.type])}
              </button>
            ))}
          </div>
        </div>
      );
    }

    return (
      <button
        ref={ref}
        type="button"
        style={{ height }}
        className={classNames('btn', `text-${color || 'light'}`, {
          action,
          'btn-dark': action,
          'btn-outline-dark': !action,
        })}
        disabled={disabled}
        onClick={onClick}
        title={title}
        {...other}
      >
        {value}
      </button>
    );
  }
);
