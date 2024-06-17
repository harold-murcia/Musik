import { useState } from 'react';
import './styles/OptionsPanel.css';

const OptionsPanel = ({ restartCount, setAmountOfScales }) => {

  const [scaleValue, setScaleValue] = useState('1');

  const changeAmountOfScales = (amount) => {
    setAmountOfScales(amount)
    setScaleValue(amount)
  }

  return (
    <div className="sidebar">
      <h3>Config</h3>
      <ul>
        <li onClick={restartCount}>Reset count</li>
        <li><input onChange={(e) => changeAmountOfScales(e.target.value)} type="range" min="1" max="3" step='1' defaultValue='1' /></li>
        <li>Scales {scaleValue}</li>
      </ul>
    </div>
  );
};

export default OptionsPanel;
