import './App.css';
import Actions from './components/Actions';
import ShowUsers from './components/ShowProducts';
import { Action } from './models/Action';
import { ActionType } from './models/Const';
import { useAddProductQuery, useAllProductQuery } from './utilis/Queries';
import { useState } from 'react';
import ShowUserDetails from './components/ShowUserDetails';
import AddUser from './components/AddUser';
import { Product } from './models/Product';

function App() {
  const [itemId, setItemId] = useState<string>();
  const [isAddProduct, setIsAddProduct ] = useState<boolean>(false);
  const [ selectedIndex, setSelectedIndex ] = useState(0);
  

  const { AddProductCall } = useAddProductQuery();

  const handleAction = (action: Action) => {
    if(action.type === ActionType.FETCH_USER_ACTION) {
      setSelectedIndex(1);
    }

    if(action.type === ActionType.FETCH_USER_DETAILS_ACTION) {
      const { id } = action.payload!;
      setItemId(id);
      setSelectedIndex(2);
    }

    if (action.type === ActionType.ADD_USER_ACTION) {
      setIsAddProduct(true);
      setSelectedIndex(3);
    }
  }

  const handleAddProduct = (product: Omit<Product, 'id'>) => {
    AddProductCall(product);
    setSelectedIndex(1);
  }

  

  return(
    <div>
      <Actions onAction={handleAction}/>
      { selectedIndex === 1 && <ShowUsers/> }
      { selectedIndex === 2 && itemId && <ShowUserDetails productId={itemId}/> }
      { selectedIndex === 3 && isAddProduct && <AddUser onAddProduct={handleAddProduct}/> }
    </div>
  )
}

export default App
