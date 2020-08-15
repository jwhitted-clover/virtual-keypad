import React, { forwardRef, useEffect, useState } from 'react';
import classNames from 'classnames';
import { sentenceCase } from 'change-case';

export default forwardRef(
  ({ action, height, color, keyCodes, disabled, onClick, moreActions, onMoreClick, children, ...other }, ref) => {
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

    const value = action ? sentenceCase(action.payload?.description || action?.type || '') : children;

    if (moreActions?.length) {
      return (
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-dark action rounded-left"
            onClick={onClick}
            disabled={disabled}
            {...other}
            title={`Shortcut keys: ${keyCodes.join(', ')}`}
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
                {a.payload?.description || a.type}
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
        title={`Shortcut keys: ${keyCodes.join(', ')}`}
        {...other}
      >
        {value}
      </button>
    );
  }
);
