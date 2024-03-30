import { ActionProps } from '../models/Action';
import { ActionType } from '../models/Const';
import styles from './Actions.module.css';

const Actions = ({ onAction }: ActionProps) => {
  
  const fetchUsers = () => {
    onAction({ type: ActionType.FETCH_USER_ACTION });
  };

  const fetchUserDeatils = ({ id }: { id: string }) => {
    onAction({ type: ActionType.FETCH_USER_DETAILS_ACTION, payload: { id }})
  }

  const addUser = () => {
    onAction({ type: ActionType.ADD_USER_ACTION });
  }

  return (
    <div className='flex justify-center my-3 gap-4'>
      <button
        className={`p-2 rounded-md ${styles.actionBtn}`}
        onClick={fetchUsers}
      >
        Fetch Posts
      </button>
      <button
        className={`p-2 rounded-md ${styles.actionBtn}`}
        onClick={() => fetchUserDeatils({ id: '6' })}
      >
        Fetch User Details
      </button>
      <button
        className={`p-2 rounded-md ${styles.actionBtn}`}
        onClick={() => addUser()}
      >
        Add User
      </button>
    </div>
  )
}

export default Actions;