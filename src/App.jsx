import './App.css'
import { useState } from 'react'
import TodoForm from './components/TaskList'

function App() {
 
      return (
       
          <div className="container  w-full flex justify-center items-center flex-col ">
            <h1 className='header text-left bg-gradient-to-r font-bold  text-3xl'>oh , Hello Welcome to Todo-App</h1>
            <TodoForm />
          </div>

          )
}

          export default App
