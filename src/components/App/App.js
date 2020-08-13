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
      <Error />
      <Configuration />
      <Devices />
      <Payment />
      <Keypad />
    </div>
  );
}

export default App;
