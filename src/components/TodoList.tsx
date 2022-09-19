import React from 'react'
import { Todo } from "../components/model";
import SingleTodo from './SingleTodo';

interface Props {
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos}) => {
  return (
    <div className='todos'>
      {todos.map((t) => (
        <SingleTodo todo={t} key={t.id} todos={todos} setTodos={setTodos} />
      ))} 
    </div>
  )
}

export default TodoList