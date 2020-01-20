import React from 'react';
import { connect } from 'react-redux';
import { deleteTask, completeTask, editTask } from '../actions/actions';
import './Task.css';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      taskField: '',
    };
  }
  handleEditing = task => {
    this.setState({ editing: !this.state.editing, taskField: task });
  };
  handleChange = e => {
    this.setState({ taskField: e.target.value });
  };
  render() {
    const { task, isDone, id } = this.props;
    const { handleUpdate, handleRemove, handleComplete } = this.props;
    return (
      <div className={isDone ? 'task bg-green' : 'task'}>
        <i
          className='fas fa-check-circle common-cl m-right'
          style={{ color: isDone && '#5be01f' }}
          onClick={() => handleComplete(id)}></i>

        <p
          style={{ display: this.state.editing ? 'none' : 'inline' }}
          className={isDone ? 'taskComplete' : ''}>
          {task}
        </p>
        <input
          style={{ display: this.state.editing ? 'inline' : 'none' }}
          type='text'
          value={this.state.taskField}
          onChange={this.handleChange}
        />

        <i
          className='fas fa-edit common-cl m-right'
          onClick={() => {
            this.state.editing &&
              this.state.taskField !== '' &&
              handleUpdate(id, this.state.taskField);
            this.handleEditing(task);
          }}></i>

        <i className='fas fa-trash-alt common-cl' onClick={() => handleRemove(id)}></i>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleComplete: id => dispatch(completeTask(id)),
  handleRemove: id => dispatch(deleteTask(id)),
  handleUpdate: (id, task) => dispatch(editTask(id, task)),
});

export default connect(null, mapDispatchToProps)(Task);
