import useTimer from '../../utility/custom-hooks/Timer';

const Accordian = ({freezCount}) => {
  const [t, setT] = useTimer(0, 'NEGATIVE');

  const handleResetTimer = () => {
    setT(0);
  }
  
  return(
    <div className="mt-10">
      <h1>React Memo Test</h1>
      <p>Counter: {t}</p>
      <button 
        onClick={freezCount}
        className='ms-2 bg-blue-600 p-1 rounded-md px-3 text-cyan-50'
      >
        Freez Count
      </button>
      <button 
        onClick={handleResetTimer}
        className='ms-2 bg-blue-600 p-1 rounded-md px-3 text-cyan-50'
      >
        Reset Counetr
      </button>
    </div>
  );
}

export default Accordian;