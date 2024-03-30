import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import ChildOne from './components/ChildOne';
import ChildTwo from './components/ChildTwo';

const ITEMS: number[] = [10, 4, 8, 3, 12, 16, 20];

function App() {
  console.log('PARENT RENDERING');
  const [ inputTextOne, setInputTextOne ] = useState<string>('');
  //const [ itmes, setItems ] = useState<number[]>(ITEMS);
  
  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    setInputTextOne(text);
  }, []);

  const handleClearBtnClick = useCallback(() => {
    setInputTextOne('');
  }, []);

  const sortedItems = useMemo(() => ITEMS.sort((a,b) => {
    console.log('SORTING ////');
    return a-b;
  }), []);

  // const sortedItems = ITEMS.sort((a,b) => {
  //   console.log('SORTING ////');
  //   return a-b;
  // });

  return (
    <div className='flex flex-col items-center justify-center h-dvh'>
      <div className='bg-lime-200 p-10 rounded-lg'>
        <h1 className='text-4xl font-bold'>Parent Application</h1>
        
        <div>
          <div className='my-6'>
            <label className='font-bold text-lg'>INPUT TEXT:</label>
            <span className='ms-2 text-5xl'>{inputTextOne}</span>
          </div>
          <div>
            <ChildOne
              onInputChange={handleInputChange}
              onBtnClearClick={handleClearBtnClick}
            />
          </div>
        </div>
        
        <div>
          <ChildTwo sortedList={sortedItems}/>
        </div>
      </div>
    </div>
  )
}

export default App
