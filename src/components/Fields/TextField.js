import React from 'react';

export default ({ id, type = 'text', label, value, disabled, onChange, ...other }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        type={type}
        className="form-control"
        value={value}
        onChange={event => onChange(event.target.value)}
        disabled={disabled}
        {...other}
      />
    </div>
  );
};
