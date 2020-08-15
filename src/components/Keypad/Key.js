import React, { forwardRef, useEffect } from 'react';
import classNames from 'classnames';
import { sentenceCase } from 'change-case';

export default forwardRef(
  ({ action, height, color = 'light', keyCodes, disabled, onClick, moreActions, children, ...other }, ref) => {
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

    return (
      <button
        ref={ref}
        type="button"
        style={{ height }}
        className={classNames('btn', `text-${color}`, {
          action,
          'btn-dark': action,
          'btn-outline-dark': !action,
        })}
        disabled={disabled}
        onClick={onClick}
        title={`Shortcut keys: ${keyCodes.join(', ')}`}
        {...other}
      >
        {action ? sentenceCase(action.payload?.description || action?.type || '') : children}
      </button>
    );
  }
);
