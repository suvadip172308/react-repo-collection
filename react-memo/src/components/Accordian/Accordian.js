import { memo } from 'react';

const Accordian = ({ message }) => {
  console.log('IN CHILD');
  
  return(
    <div className="mt-10">
      <h1>React Memo Test</h1>
      <p>{message}</p>
    </div>
  );
}

export default memo(Accordian);