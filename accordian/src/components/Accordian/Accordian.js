import { useState } from 'react';
import { ACCORDIANS } from '../../utility/constant';
import Panel from '../Panel/Panel';

const Accordian = () => {
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleShowPanel = (id) => {
    setSelectedItemId(id);
  }
  
  return (
    <div className='w-9/12 mx-auto'>
      <h1 className='my-5 text-3xl font-bold text-start'>Accordian List</h1>
      <ul className=''>
      { 
        ACCORDIANS.map((item)  => {
          return (
            <li key={item.id} className='mb-1 shadow-lg'>
              <Panel
                item={item}
                isDisplayPanel={selectedItemId === item.id}
                showPanel={handleShowPanel}
              ></Panel>
            </li>
          )
        })
      }
    </ul>
    </div>
  );
}

export default Accordian;