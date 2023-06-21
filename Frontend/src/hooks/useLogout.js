import { useAuthContext } from "./useAuthContext"

export const useLogout = () =>{
    const {dispatch}=useAuthContext()
    const logout = ()=>{
        //remove from local Storage
        localStorage.removeItem('user')
        dispatch({type:'LOGOUT'});


    }
    return {logout};
}