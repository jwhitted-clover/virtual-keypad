import React from 'react';

export default ({ id, label, value, disabled, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}:</label>
      <input
        id={id}
        type="text"
        className="form-control"
        value={value}
        onChange={event => onChange(event.target.value)}
        disabled={disabled}
      />
    </div>
  );
};
