import React from 'react'
import "../App.css"
import { useState } from 'react'
import { FaPlusCircle , FaTrash , FaCheckCircle } from 'react-icons/fa'

const TaskList = () => {
    const [tasklist, setTasklist] = useState([])
    const [task, setTask] = useState('')
    const [confirmList , SetConfirmList] = useState([])
    
    const TaskValue =  (event) => {
        setTask(event.target.value)
    }

    const addTask  = () =>{
      if(task === ''){
        alert("Digite um valor para adicionar a lista!!")
      }else{
        setTasklist([...tasklist, task])
        setTask('')
      }
    }

    const delAllTask = () => {
      setTasklist([])
    }

    const taskDel = (taskName) => {
      setTasklist([...tasklist].filter((task) => task !== taskName))
      

    }

    const taskCompleteDel = (taskName) => {
      SetConfirmList([...confirmList].filter((task) => task!== taskName));
    }



    const ConfirmTask = (taskName) => {
      SetConfirmList([...confirmList, taskName])
      setTasklist([...tasklist].filter((task) => task!== taskName));
    }

  return (
    <div className="container">
      <div  className='flex justify-center items-center gap-4 my-5 w-full ' >
        <input maxLength={60} type="text" value={task} onChange={TaskValue}  className='outline-none rounded-lg p-3 w-full bg-slate-400 text-black border-none 'placeholder='Digite sua tarefa..'/>
        <button onClick={addTask} className='btn bg-slate-400  p-3 text-gray-800 font-bold hover:bg-teal-300 transition-all ease-in-out'>
          <FaPlusCircle size={20}/>
        </button>
        <button  onClick={delAllTask} className="btn-del bg-slate-400  p-3 text-gray-800 font-bold hover:bg-red-900 hover:text-white transition-all ease-in-out">
          <FaTrash size={20}/>
        </button>
    </div>
    <div className="list list-none flex flex-col gap-4 font-bold text-1xl w-full ">
      <div className="info flex justify-center gap-10">
        <span className='text-center w-[50%] p-2 rounded-lg bg-slate-400 flex justify-center gap-2'>✅ <p className='bg-slate-400 font-bold'>{tasklist.length}</p>Tasks</span>
        <span className=' bg-slate-400 w-[50%] p-2 text-center rounded-lg '> {confirmList.length} tasks finished ✨🎉</span>
      </div>
      {tasklist.map((task)=>{
        return <li  className='item transition-all ease-in-out 3s w-full flex justify-between items-center bg-slate-400 p-3 rounded-md  text-slate-800'> <FaCheckCircle className='hover:cursor-pointer hover:transition-all hover:scale-125 hover:ease-in-out hover:text-green-500' size={22} onClick={()=>ConfirmTask(task)} /> {task} <FaTrash onClick={() => taskDel(task)} className='hover:cursor-pointer hover:scale-125 hover:text-red-800 transition-all ease-in-out 3s'  size={20} /> </li>
      })}
      {confirmList.map((task)=>{
        return <li  className='item transition-all ease-in-out 3s w-full flex justify-between items-center bg-green-400 p-3 rounded-md  text-slate-800 line-through'> {task}  <FaTrash onClick={() => taskCompleteDel(task)} className='hover:cursor-pointer hover:scale-125 hover:text-red-800 transition-all ease-in-out 3s'  size={20} /> </li>
      })}
      
    </div>
    </div>
    
    
  )
}

export default TaskList