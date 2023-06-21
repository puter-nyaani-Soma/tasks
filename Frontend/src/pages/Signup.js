import {useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faSpinner} from '@fortawesome/free-solid-svg-icons';
const Signup = () => {
    const [username,setUserName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const {Signup,isLoading,error}=useSignup()
    const handleSubmit=async(e)=>{
        e.preventDefault();
        await Signup(username,password,email)
       
        
    }
    return ( 
        <form className='signup'>
            <label>Username</label>
            <input type="text"
            onChange={(e)=>setUserName(e.target.value)}
            value={username}/>
            <label>Email</label>
            <input type="email"
            onChange={(e)=>setEmail(e.target.value)}
            value={email} />
            
            <label>Password</label>
            <input type="password" 
            onChange={(e)=>setPassword(e.target.value)}
            value={password} />
           {!isLoading && <button onClick={handleSubmit}>Signup</button>}
           {isLoading && <FontAwesomeIcon icon={faSpinner} spin size='2xl' style={{color: "rgb(45, 185, 131)",marginLeft:'175px'}} />}
            {error&&<div className="error">{error}</div>}



        </form>

     );
}
 
export default Signup;