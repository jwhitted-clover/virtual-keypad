import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectDevices, selectDeviceId, connect, clearDevices } from '../../store';
import { selectVisible } from './selectors';
import { Logo } from '../SVG';
import Device from './Device';

export default () => {
  const dispatch = useDispatch();
  const devices = useSelector(selectDevices);
  const deviceId = useSelector(selectDeviceId);
  const visible = useSelector(selectVisible);
  const [disabled, setDisabled] = useState();

  const select = useCallback(
    id => async event => {
      try {
        event.preventDefault();
        setDisabled(true);
        await dispatch(connect(id));
      } finally {
        setDisabled(false);
      }
    },
    [dispatch]
  );

  const cancel = () => dispatch(clearDevices());

  if (!visible) return null;

  return (
    <div className="Devices card">
      <div className="card-header">
        <Logo />
        <h3>Virtual Keypad</h3>
        <button className="close text-light" title="Cancel" onClick={cancel} disabled={disabled}>
          &times;
        </button>
      </div>
      <div className="card-body">
        <div className="form-group">
          <label>Select Device:</label>
          <div className="list-group">
            {devices.map(device => (
              <Device
                key={device.id}
                device={device}
                disabled={disabled}
                active={device.id === deviceId}
                onClick={select(device.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
