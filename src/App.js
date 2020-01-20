import React from 'react';
import './App.css';
import Form from './components/Form/Form';
import ToDoList from './components/ToDoList/ToDoList';
function App() {
  return (
    <div className='app'>
      <Form />
      <ToDoList />
    </div>
  );
}

export default App;
