import { useState } from "react";
import { useAuthContext } from "./useAuthContext";


export const useSignup =()=>{
    const [error,setError]=useState(null)
    const [isLoading,setIsLoading] = useState(null)
    const {dispatch}=useAuthContext();
    const Signup= async (username,password,email)=>{
        setIsLoading(true)
        setError(null)
        const response = await fetch ('/api/users/signup',{
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({username,password,email})
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
    return {Signup,isLoading,error}

}