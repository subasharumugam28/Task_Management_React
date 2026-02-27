import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import ProgressBar from './Components/ProgressBar';
import { useEffect, useState } from 'react';

function App() {
  const [task,setTask]=useState([]);
  useEffect(()=>{
localStorage.setItem("tasks",JSON.stringify(task))
  })
  const addTask=(tasks)=>{
    setTask([...task,tasks])
  }
  const deleteTask=(id)=>{
const newTask=task.filter((task,index)=>index!==id);
setTask(newTask);
  }
  const updateTask=(updatedTask,index)=>{
    const newTask=[...task];
    newTask[index]=updatedTask;
    setTask(newTask);
  }
  const clearAll=()=>{
    setTask([]);
  }
  return (
    <>
    <h1 className='app-title'>Task Management</h1>
  <TaskForm addTask={addTask}/>
  <TaskList task={task} updateTask={updateTask} deleteTask={deleteTask}/>
  <ProgressBar task={task}/>
  <div className="clear-wrapper">
  <button className="clear-btn" onClick={clearAll}>clear all</button>
  </div>
 </>
  );
}

export default App;
