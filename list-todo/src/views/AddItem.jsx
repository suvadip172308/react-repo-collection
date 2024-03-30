import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Card from "../components/Card";
import { addTask } from "../store/task.slice";


const AddItem = () => {
  const [ taskTitle, setTaskTitle ] = useState('');
  const [ date, setDate ] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    dispatch(addTask({
      id: uuidv4(),
      title: taskTitle,
      date
    }));
    
    setTaskTitle('');
    setDate('');
  }
  
  return (
    <Card className={'min-[60]: w-5/12 mx-auto my-10'}>
      <div className="flex flex-col">
        <h1 className="px-4 py-6 text-xl font-bold">Add Tasks</h1>
        <div className="flex justify-center my-4">
          <label htmlFor="date"className="px-3">Task</label>
          <input
            type="text"
            className="p-1 border-solid border-2 w-6/12 border-black"
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
          />
        </div>
        <div className="flex justify-center">
          <label htmlFor="date" className="px-3">Date</label>
          <input
            type="date"
            className="p-1 border-solid border-2 w-6/12 border-black"
            value={date}
            onChange={(event) => setDate(event.target.value)}
          />
        </div>
        <div className="my-7 flex justify-center">
          <button
            className="py-2 w-3/12 bg-blue-500"
            onClick={ handleAddTask }
          >
            ADD
          </button>
        </div>
      </div>
    </Card>
  );
}

export default AddItem;