import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquare , faTrash} from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom'
import { useTasksContext } from '../hooks/useTasksContext';
const TaskDetails = ({task}) => {
    const {dispatch} = useTasksContext();
    const handleClick  = async (e) => {

        const response = await fetch('/api/tasks/'+task._id,{
            method:'DELETE',
        })
        const json = await response.json();

        if(response.ok){
            dispatch({type:"DELETE_TASK",payload:json})

        }
    };

    return ( 
        <div className="workout-details">
            <h4>{task.title}</h4> <h6>{task.createdAt}</h6>
            <p>{task.description}</p>
    
            {task.finshed &&<FontAwesomeIcon icon={faSquareCheck} style={{color:"rgb(45, 185, 131)"}} />}
            {!task.finshed &&<Link> <FontAwesomeIcon icon={faSquare} style={{color:"#e7195a"}} /></Link>  }
            <span onClick={handleClick}><FontAwesomeIcon icon={faTrash} style={{color: "#e7195a",}} /></span>
            
        </div>
     );
}
 
export default TaskDetails;