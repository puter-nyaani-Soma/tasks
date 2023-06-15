import { TasksContext } from "../context/TasksContext";
import { useContext } from "react";

export const useTasksContext = () =>{
    const context = useContext(TasksContext)
    if(!context){
        throw Error('useTasksContext must be used with a TaskContext')
    }
    return context 
}