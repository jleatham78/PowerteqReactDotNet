import React, { useState } from 'react';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';

function App() {
  const [ todos, setTodos ] = useState([
    { text: "Create components"},
    { text: "Style the page"},
    { text: "Connect the backend"}
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const deleteTodo = (itemToBeDeleted) => {
    setTodos(todos.filter((todos) => itemToBeDeleted !==todos));
  }

    return (

      <div className="app">
        <div>
          <header className='header'>
            <p>ToDo List</p>
          </header>
         </div>

        <div className="todo-list">
          {todos.map((todo, index) => (
            <Todo
            key={index}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
            />
          ))}
          <TodoForm addTodo={addTodo} />
        </div>
        <footer>
        <div className='footer'>
          <p>Copyright 2021 JLEATHAM</p>
        </div>
      </footer>
      </div>
    );
        
  
}

export default App;