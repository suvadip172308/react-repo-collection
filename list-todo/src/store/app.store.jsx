import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './task.slice';

const appStore = configureStore({
  reducer: {
    task: taskReducer
  }
});

export default appStore;