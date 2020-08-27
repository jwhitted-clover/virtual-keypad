import React from 'react';
import { useTranslation } from 'react-i18next';

export default ({
  id,
  type = 'text',
  autoCorrect = 'off',
  autoComplete = 'off',
  autoCapitalize = 'off',
  spellCheck = 'false',
  value,
  disabled,
  onChange,
  ...other
}) => {
  const { t } = useTranslation();

  return (
    <div className="form-group">
      <label htmlFor={id}>{t(`${id}~label`)}:</label>
      <input
        id={id}
        type={type}
        className="form-control"
        title={t(`${id}~title`, '')}
        autoCorrect={autoCorrect}
        autoComplete={autoComplete}
        autoCapitalize={autoCapitalize}
        spellCheck={spellCheck}
        value={value}
        onChange={event => onChange(event.target.value)}
        disabled={disabled}
        {...other}
      />
    </div>
  );
};
