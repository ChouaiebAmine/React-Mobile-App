import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Add from "./ToDoAdd"
import Tododisplay from "./TodoDisplay"
import './App.css'


function App() {

  const [todos,setTodos] = useState([]);

  // 3 points to remember the previous info of the list 
  const addTodo = (newTodo) => {
    setTodos([...todos,{...newTodo,id:Date.now(),done:false}])
  }
  
  const updateTodo = (id,updatetodo) => {
    setTodos(todos.map(todo => (todo.id === id) ? {...todo,...updatetodo} : todo));
  }

  const deleteTodo = (id) =>{
    setTodos(todos.filter(todo =>todo.id !== id));
  }
  const toggletodo =(id) =>{
    setTodos(todos.map(todo => (todo.id ===id ? {...todo,done:!todo.done}:todo)));
  }

  const changeposDown =(index) => {
    if (index === todos.length - 1) return;
    const newTodos = [...todos];
    [newTodos[index + 1],newTodos[index]] = [newTodos[index],newTodos[index + 1]];
    setTodos(newTodos);
  };
  const changeposUp = (index) => {
    if (index === 0) return;
    const newTodos = [...todos];
    [newTodos[index - 1],newTodos[index]] = [newTodos[index],newTodos[index - 1]];
    setTodos(newTodos);
  };



  return (
    <div className='app'>
      <h1>TodoListApp</h1>
      <Add AddTodo={addTodo}/>
      <Tododisplay
        todos = {todos}
        deleteTodo={deleteTodo}
        toggletodo={toggletodo}
        updatetodo={updateTodo}
        changeposUp={changeposUp}
        changeposDown={changeposDown}
      />
    </div>
  )
}

export default App
