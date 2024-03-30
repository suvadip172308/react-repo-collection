import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: 'task',
  initialState: {
    items: []
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push(action.payload);
    },
    removeTask: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    clearTask: (state) => {
      state.items.length = 0;
    }
  }
});

export const { addTask, removeTask, clearTask } = taskSlice.actions;
export default taskSlice.reducer;