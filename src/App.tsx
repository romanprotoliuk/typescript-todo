import React from 'react';
import './App.css';
import Inputfield from './components/Inputfield';
import { useState } from 'react';
import { Todo } from './components/model';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  const [todo, setToDo] = useState<string>("")
  const [todos, setTodos] = useState<Array<Todo>>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()

    console.log({todo})

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }])
      setToDo("")
    }
  }

  console.log(todo)

  return (
    <div className="App">
      <span className='heading'>Taskify</span>

      <Inputfield todo={todo} setToDo={setToDo} handleAdd={handleAdd} />

      <TodoList todos={todos} setTodos={setTodos} />


    </div>
  );
}

export default App;
