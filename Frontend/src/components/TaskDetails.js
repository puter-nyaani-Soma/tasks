import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquare , faTrash} from '@fortawesome/free-solid-svg-icons';
import { useTasksContext } from '../hooks/useTasksContext';

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import isAfter from 'date-fns/isAfter';
const TaskDetails = ({task}) => {
    const {dispatch} = useTasksContext();
    const handleClick  = async (e) => {

        const response = await fetch('/api/tasks/'+task._id,{
            method:'DELETE',
        })
        
        if(response.ok){
            const json = await response.json();
            dispatch({type:"DELETE_TASK",payload:json})

        }
    };
    const update = async (e)=>{
        if(task.finished){
            const response = await fetch('/api/tasks/' + task._id, {
                method: 'PATCH',
                body: JSON.stringify({ finished: false }),
                headers: {
                    'Content-Type': 'application/json'
                  },
              });
              
              if (response.ok){
                const json = await response.json();
                dispatch({type:"UPDATE_TASK",payload:json});
            }
        }
        else{
            const response = await fetch('/api/tasks/' + task._id, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({ finished: true }),
              });
              
              if (response.ok){
                const json = await response.json();
                dispatch({type:"UPDATE_TASK",payload:json});
            }

        }
    }

    return ( 
        // eslint-disable-next-line react/jsx-no-duplicate-props
        <div className={isAfter(new Date(),new Date(task.time))?'workout-details error':'workout-details'}>
            <h4>{task.title}</h4> 
            <h6>{formatDistanceToNow(new Date(task.createdAt),{addSuffix:true})}</h6>
            {isAfter(new Date(),new Date(task.time))?<h6>Over due by {formatDistanceToNow(new Date(task.time))}</h6>:<h6>Due in {formatDistanceToNow(new Date(task.time))}</h6>}
            

            
            <p>{task.description}</p>
    
            <p onClick={update}>{task.finished &&<FontAwesomeIcon icon={faSquareCheck} style={{color:"rgb(45, 185, 131)",cursor:'pointer'}} />}</p >
            <p onClick={update}>{!task.finished && <FontAwesomeIcon icon={faSquare} style={{color:"#e7195a",cursor:"pointer"}} />}</p >
            <span onClick={handleClick}><FontAwesomeIcon icon={faTrash} style={{color: "#e7195a",}} /></span>
            
        </div>
     );
}
 
export default TaskDetails;