import React from 'react';
import { connect } from 'react-redux';
import Task from '../Task/Task';
import './ToDoList.css';

function ToDoList(props) {
  const { taskList } = props;
  return (
    <div className='tasks'>
      {taskList.map(e => (
        <Task key={e.id} task={e.task} isDone={e.isDone} id={e.id} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  taskList: state,
});

export default connect(mapStateToProps)(ToDoList);
