import { memo } from 'react';

const Accordian = ({ message, freezCount }) => {
  console.log('IN CHILD');
  
  return(
    <div className="mt-10">
      <h1>React Memo Test</h1>
      <p>{message}</p>
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