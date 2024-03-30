import { memo, useMemo } from 'react';

const Accordian = ({ message, freezCount }) => {
  const numbers = [2, 5, 3, 9, 4, 7];
  console.log('IN CHILD');

  const sortedList = useMemo(function () {
    console.log('In Short');
    return numbers.sort((a,b) =>  a - b);
  }, []);
  
  return(
    <div className="mt-10">
      <h1>React Memo Test</h1>
      <p>Message From Parent : {message}</p>
      <p>{sortedList}</p>
      <button 
        onClick={freezCount}
        className='ms-2 bg-blue-600 p-1 rounded-md px-3 text-cyan-50'
      >
        Freez Count
      </button>
    </div>
  );
}

export default memo(Accordian);