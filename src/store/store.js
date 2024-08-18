import { configureStore } from '@reduxjs/toolkit';
import scheduleSlice from './reducers/scheduleSlice';
// import todosReducer from '../app/reducers/todosSlice';

const store = configureStore({
  reducer: {
    schedule: scheduleSlice,
    // teamList: teamListSlice,
    // todos: todosReducer
  }
});

export default store;