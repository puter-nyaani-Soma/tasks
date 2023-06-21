import {useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSpinner} from '@fortawesome/free-solid-svg-icons';
const Login = () => {

    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {Login,isLoading,error}=useLogin()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await Login(username,password)
        
    }
    return ( 
        <form className='login'>
            <label >

                Username
            </label>
            <input type="username"
            onChange={(e)=>setUserName(e.target.value)}
            value={username}/>
             <label >

Password
</label>
            <input type="password" 
            onChange={(e)=>setPassword(e.target.value)}
            value={password} />
            {!isLoading && <button onClick={handleSubmit}>Login</button>}
           {isLoading && <FontAwesomeIcon icon={faSpinner} spin size='2xl' style={{color: "rgb(45, 185, 131)",marginLeft:'175px'}} />}
            {error&&<div className="error">{error}</div>}




        </form>

     );
}
 
export default Login;