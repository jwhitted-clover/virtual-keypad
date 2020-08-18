import React from 'react';
import classNames from 'classnames';

import Configuration from '../Configuration';
import Devices from '../Devices/Devices';
import Keypad from '../Keypad';
import Payment from '../Payment';
import { useError } from '../Error';
import usePreventDoubleTapZoom from './usePreventDoubleTapZoom';
import './styles.scss';

export default () => {
  usePreventDoubleTapZoom();
  useError();

  return (
    <div className={classNames('App container')}>
      <div className="row no-gutters">
        <div className="col-12 col-md-6">
          <div className="maxwidth mx-auto">
            <Configuration />
            <Devices />
            <Keypad />
          </div>
        </div>
        <div className="col-12 col-md-6 order-first order-md-last">
          <div className="maxwidth mx-auto ml-md-2">
            <Payment />
          </div>
        </div>
      </div>
    </div>
  );
};
