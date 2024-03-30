import { Provider } from 'react-redux';
import AddItem from './views/AddItem';
import ItemList from './views/ItemList';
import { TODOWORK } from './common/constant';
import appStore from './store/app.store';

function App() {
  return (
    <Provider store={appStore}>
      <div className='app-container'>
        <AddItem />
        <ItemList items={TODOWORK}/>
      </div>
    </Provider>
  )
}

export default App;
