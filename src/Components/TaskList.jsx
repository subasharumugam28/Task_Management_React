import '../Styles/TaskList.css';
function TaskList({task,deleteTask,updateTask}){

    const updateComplete=(index)=>{
    const updatedTask={...task[index],completed:!task[index].completed}
    
    return updateTask(updatedTask,index)
}
    return  task.map((value,index)=>{
       return <li key={index}>Task Name:{value.text}
       Task Priority:{value.priority}
       Task Category:{value.category}
       <button onClick={()=>{updateComplete(index)}}>{value.completed?"undo":"completed"}
       </button>

       <button onClick={()=>{
        deleteTask(index)
       }}>delete</button>
       </li>
    })
    

}
export default TaskList