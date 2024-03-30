import { FaRegTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removeTask } from "../store/task.slice";

const Item = ({ item }) => {
  const dispatch = useDispatch();

  const handelDeleteItem = (id) => {
    dispatch(removeTask({id}));
  }

  return (
    <div className="my-2 mx-6 flex justify-between">
      <span className="w-2/12">
        <input type="checkbox" className="p-4 border border-solid border-black"/>
      </span>
      <span className="w-5/12">
        {item.title}
      </span>
      <span className="w-4/12">
        {item.date}
      </span>
      <span className="w-1/12 align self-start">
        <button className="px-3 py-1" onClick={() => handelDeleteItem(item.id)}>
          <FaRegTrashCan />
        </button>
      </span>
    </div>
  );
}

export default Item;