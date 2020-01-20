import React from 'react';
import { connect } from 'react-redux';
import './Form.css';
import { addNewTask } from '../actions/actions';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTask: '',
    };
  }
  handleInput = e => {
    this.setState({ newTask: e.target.value });
  };
  emtyField = () => {
    this.setState({ newTask: '' });
  };

  render() {
    return (
      <div className='add-form'>
        <input
          value={this.state.newTask}
          placeholder='Enter a task...'
          type='text'
          onChange={this.handleInput}
        />
        <button
          className='add-btn'
          onClick={() => {
            if (this.state.newTask !== '') {
              this.props.handleAdd(this.state.newTask);
              this.emtyField();
            }
          }}>
          Add Task
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAdd: task => dispatch(addNewTask(task)),
  };
};

export default connect(null, mapDispatchToProps)(Form);
