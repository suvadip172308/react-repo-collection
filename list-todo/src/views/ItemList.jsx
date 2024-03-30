import { useSelector } from "react-redux";
import Item from "./Item";
import Card from "../components/Card";

const ItemList = () => {
  const items = useSelector(store => store.task.items);
  
  return (
    <Card className={'w-8/12 h-60 mx-auto'}>
      {items.length ? <h1 className="px-4 py-3 text-xl font-bold">Tasks</h1>  : ''}
      <div className="flex flex-col justify-center content-center">
        {
          items.length ? items.map(item => {
            return <Item item={item} key={item.id}/>
          }) : (<p className="flex justify-center content-center text-lg font-extrabold"> No Items In List</p>)
        }  
      </div>
    </Card>
  );
};

export default ItemList;