import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from '../actions/constants';

const initialState = [];

export const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return state.concat(action.payload);
    case DELETE_TASK:
      return state.filter(e => e.id !== action.payload);
    case COMPLETE_TASK:
      return state.map(e => {
        e.id === action.payload && (e.isDone = !e.isDone);
        return e;
      });
    case EDIT_TASK:
      return state.map(e => {
        e.id === action.payload.taskId && (e.task = action.payload.task);
        return e;
      });
    default:
      return state;
  }
};
