import {TodoCouter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import React from 'react';

const defaultTodos = [
  {text:'Cortar Cebolla', completed:true},
  {text:'Tomar el curso de React.js', completed:true},
  {text:'Llorar con la llorona', completed:false},
];

function App() {
  return (
    <>
      <TodoCouter completed={16} total={25}/>
      <TodoSearch />
      <TodoList>      
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text}
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
