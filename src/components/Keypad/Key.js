import React, { useEffect } from 'react';
import classNames from 'classnames';
import { sentenceCase } from 'change-case';

export default ({ action, color = 'light', keyCodes, disabled, onClick, children, ...other }) => {
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
      type="button"
      className={classNames('btn', `text-${color}`, {
        'btn-dark': action,
        'btn-outline-dark': !action,
      })}
      disabled={disabled}
      onClick={onClick}
      title={`Shortcut keys: ${keyCodes.join(', ')}`}
    >
      {action ? sentenceCase(action.payload?.description || action?.type || '') : children}
    </button>
  );
};
