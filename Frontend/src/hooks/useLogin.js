import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useLogin =()=>{
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch}=useAuthContext();
    const Login= async (username,password)=>{
        setIsLoading(true)
        setError(null)
        const response = await fetch ('/api/users/Login',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({username,password})
        })
        const json=await response.json();
        if(!response.ok){
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok){
            //saving user in local storage
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type:'LOGIN',payload:json});
            setIsLoading(false);

        }


    }
    return {Login,isLoading,error}

}