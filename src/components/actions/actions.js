import { ADD_TASK, DELETE_TASK, EDIT_TASK, COMPLETE_TASK } from './constants';

export const addNewTask = task => ({
  type: ADD_TASK,
  payload: { task, isDone: false, id: Date.now() },
});

export const deleteTask = taskId => ({
  type: DELETE_TASK,
  payload: taskId,
});
export const completeTask = taskId => ({
  type: COMPLETE_TASK,
  payload: taskId,
});

export const editTask = (taskId, task) => ({
  type: EDIT_TASK,
  payload: { taskId, task },
});
