import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);

  const updateCount = () => setCount(count + multiplier);
  const subtractCount = (num) => setCount(count-num);

  const addMultiplier = (m) => {
    if(m==2 && count>=10){
      setMultiplier(multiplier * m);
      subtractCount(10);
    }
    if(m==5 && count>=100){
      setMultiplier(multiplier * m);
      subtractCount(100);
    }
    if(m==10 && count>=1000){
      setMultiplier(multiplier * m);
      subtractCount(1000);
    }
  }
  return (
    <div className="App>">
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img className = "samosa" src = "./samosa.png" onClick={updateCount}></img>

      <div className = "container">
        <div className = "upgrade">
          <h3>Double Stuffed 👯‍♀️</h3>
          <p>2x per click	</p>
          <button onClick = {() => addMultiplier(2)}>10 samosas</button>
        </div>

        <div className = "upgrade">
          <h3>Party Pack 🎉</h3>
          <p>5x per click	</p>
          <button onClick = {() => addMultiplier(5)} >100 samosas</button>
        </div>        
        
        <div className = "upgrade">
          <h3>Full Feast 👩🏽‍🍳</h3>
          <p>10x per click	</p>
          <button onClick = {() => addMultiplier(10)}>1000 samosas</button>
        </div>
      </div>
    </div>
  )
}

export default App