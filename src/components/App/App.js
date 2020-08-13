import React from 'react';

import Error from '../Error';
import Configuration from '../Configuration';
import Keypad from '../Keypad';
import Devices from '../Devices/Devices';
import './styles.scss';

function App() {
  return (
    <div className="App container">
      <Keypad />
      <Error />
      <Configuration />
      <Devices />
    </div>
  );
}

export default App;
