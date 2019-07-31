import React from 'react';
import Hello from './components/Hello';
import DetectChrome from './components/DetectChrome';
import './styles/main.scss';

const App = () => (
  <div>
    <DetectChrome>
      <Hello greeting="Hello" isFullScreen />
    </DetectChrome>
  </div>
);

export default App;
