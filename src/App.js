import React from 'react';
import CounterIncrease from './component/CounterIncrease';
import CounterDecrease from './component/CounterDecrease';
import IncreaseByTen from './component/IncreaseByTen';
import DecreaseByTen from './component/DecreaseByTen';
import Counter from './component/Counter';

function App() {
  return (
    <div>
      Merhaba!
      <div className="col-md-3">
        <Counter /><br/><br/>
        <CounterIncrease /><br/>
        <CounterDecrease /><br/>
        <IncreaseByTen /><br/>
        <DecreaseByTen />
      </div>
    </div>
  );
}

export default App;
