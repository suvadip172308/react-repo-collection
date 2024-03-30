import {useState, /*useMemo*/ } from 'react';
import './App.css';
import Accordian from './components/Accordian/Accordian';

function App() {
  const [text]= useState('This is Static Text');
  const [counter, setCounter] = useState(0);
  const [isFreez, setFreez] = useState(false);

  //const texts = [5, 4, 3, 7, 9, 1];
  //const texts = useMemo(() => ['Hi', 'Hello'], []);
  

  const handleCounter = (inc) => {
    setCounter((prevCounter) => prevCounter + inc);
  }

  const freezCountHandler = () => {
    setFreez(prevFreez => !prevFreez);
  };

  return (
    <div className="App">
      <button
        className='ms-2 bg-blue-600 p-1 rounded-md px-3 text-cyan-50'
        onClick={() => handleCounter(-1)}
         disabled={isFreez}
      >
        -
      </button>
      <span className='ms-2'>Counter: {counter}</span>
      <button
        className='ms-2 bg-blue-600 p-1 rounded-md px-3 text-cyan-50'
        onClick={() => handleCounter(1)}
        disabled={isFreez}
      >
        +
      </button>
      <Accordian message={text} freezCount={freezCountHandler}/>
    </div>
  );
}

export default App;
