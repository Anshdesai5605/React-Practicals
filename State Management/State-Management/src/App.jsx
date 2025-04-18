import { use, useState } from 'react'
import './App.css'

function App() {
 const [counter, setCounter] = useState(0);

  const increment =() => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter-1);
  };

  return (
    <>
      <p>Counter:{counter}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

export default App