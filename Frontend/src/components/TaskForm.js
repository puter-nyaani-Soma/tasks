import { useState } from "react";
import  {useTasksContext} from '../hooks/useTasksContext'

const TaskForm = () => {
    const {dispatch}=useTasksContext();

    const [title,setTitle] = useState('')
    const [time,setTime] = useState('')
    const [description,setDescription] = useState('')
    const [error,setError] = useState(null)
    const [emptyFields,setEmptyFields] = useState([])
    const handleSubmit = async (e) => {
        e.preventDefault();
        const task={title,time,description}
        const response = await fetch('/api/tasks/',
        {
            method: 'POST',
            body:JSON.stringify(task),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json();
        if(!json.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields);
            
        }
        if(response.ok){
            setError(null)
            setTime('')
            setTitle('')
            setDescription('')
            setEmptyFields([]);
            console.log("addedtasl"); 
            dispatch({type:"CREATE_TASK",payload:json})
        }
    }

    
    
    

    return (  
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Task</h3>
            <label>
                Task Title
            </label>
            <input 
            type="text" 

            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className={emptyFields.includes('title')?'error':''}/>
            <label>Complete by</label>
            <input type="date"
            value={time}
            onChange={(e)=>setTime(e.target.value)}
            className={emptyFields.includes('time')?'error':''}/>
            <label>Description</label>
            <textarea
            value={description}
            onChange={(e)=>setDescription(e.target.value)}>
            </textarea>
            <button>Add Task +</button>
            {error && <div className="error">{error} </div>}

        </form>
        

    );
}
 
export default TaskForm;