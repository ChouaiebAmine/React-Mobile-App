import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Add from "./ToDoAdd"
import './App.css'

const addTodo = (newTodo) => {
  setTodos([...todos,{...newTodo,id:Date.now(),done:false}])
}
function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div className='app'>
      <h1>Todo App</h1>
      <Add AddTodo={addTodo}/>
    </div>
  )
}

export default App
