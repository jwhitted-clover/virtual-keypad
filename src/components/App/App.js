import React from 'react';

import Configuration from '../Configuration';
import Devices from '../Devices/Devices';
import Error from '../Error';
import Keypad from '../Keypad';
import Payment from '../Payment';
import './styles.scss';

function App() {
  return (
    <div className="App container">
      <div className="row no-gutters">
        <div className="col-12 col-md-6">
          <div className="maxwidth mx-auto">
            <Error />
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
}

export default App;
