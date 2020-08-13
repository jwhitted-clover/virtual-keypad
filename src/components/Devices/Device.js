import React from 'react';
import classNames from 'classnames';
import { APP } from '../../common/constants';

export default ({ device, active, disabled, onClick }) => {
  const cloud = device.apps[APP.CLOUD_PAY_DISPLAY];
  const cloudStatus = cloud ? 'Cloud Pay Display is installed' : 'Cloud Pay Display is NOT installed';

  return (
    <button
      key={device.id}
      type="button"
      className={classNames(
        'list-group-item d-flex justify-content-between align-items-center list-group-item-action p-1',
        {
          disabled,
          'list-group-item-primary': active,
        }
      )}
      onClick={onClick}
    >
      <div className="p-1">
        {device.name && <div className="font-weight-bold">{device.name}</div>}
        {device.productName} {device.serial}
      </div>
      <span
        className={classNames('badge p-1', { 'badge-success': cloud, 'badge-warning': !cloud })}
        role="img"
        aria-label={cloudStatus}
        title={cloudStatus}
      >
        ☁️
      </span>
    </button>
  );
};
