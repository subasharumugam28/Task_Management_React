import { useState } from "react";
import '../Styles/TaskForm.css';

function TaskForm ({addTask}){
const [task,setTask]=useState();
const [priority,setPriority]=useState("medium");
const [category,setCategory]=useState("general");

function formSubmit(e){
e.preventDefault();
addTask({text:task,priority,category,completed:false});
setTask("");
setPriority("medium");
setCategory("general");
}
return <>
<form onSubmit={formSubmit}>
    <h1>Enter Task:</h1><input type="text" value={task} onChange={(e)=>{setTask(e.target.value)}}></input>
    <h1>Enter Priority</h1><select value={priority} onChange={(e)=>{setPriority(e.target.value)}}>
        <option  value="high">high</option>
        <option value="medium">medium</option>
        <option value="low">low</option>
    </select>
    <h1>Enter Category</h1>
    <select value={category} onChange={(e)=>{setCategory(e.target.value)}}>
        <option value="general">general</option>
        <option value="work">work</option>
    </select>
    <input type="submit">
    </input>
</form>
</>
}
export default TaskForm;