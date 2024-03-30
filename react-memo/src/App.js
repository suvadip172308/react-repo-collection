import { useState } from 'react';
import './App.css';
import Accordian from './components/Accordian/Accordian';

function App() {
  const [text]= useState('This is Static Text');
  const [counter, setCounter] = useState(0);

  const handleCounter = (inc) => {
    setCounter((prevCounter) => prevCounter + inc);
  }

  return (
    <div className="App">
      <button
        className='ms-2 bg-blue-600 p-1 rounded-md px-3 text-cyan-50'
        onClick={() => handleCounter(-1)}
      >
        -
      </button>
      <span className='ms-2'>Counter: {counter}</span>
      <button
        className='ms-2 bg-blue-600 p-1 rounded-md px-3 text-cyan-50'
        onClick={() => handleCounter(1)}
      >
        +
      </button>
      <Accordian message={text}/>
    </div>
  );
}

export default App;
