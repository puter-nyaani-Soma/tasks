import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCheck, faSquare  } from '@fortawesome/free-solid-svg-icons';
import {Link } from 'react-router-dom'
const TaskDetails = ({task}) => {
    // const handleClick  = (e) => {
    //     fetch('http://localhost:8000/blogs/'+blog.id,{
    //         method:'PATCH',
    //     }).then(() => {
           
    //     })
    // };

    return ( 
        <div className="workout-details">
            <h4>{task.title}</h4> <h6>{task.createdAt}</h6>
            <p>{task.description}</p>
    
            {task.finshed &&<FontAwesomeIcon icon={faSquareCheck} style={{color:"rgb(45, 185, 131)"}} />}
            {!task.finshed &&<Link> <FontAwesomeIcon icon={faSquare} style={{color:"#e7195a"}} /></Link>  }
            
        </div>
     );
}
 
export default TaskDetails;