import {Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
const Navbar = () => {
    const {user} = useAuthContext();
    const {logout} = useLogout();
    return ( 
        <header>
            <div className="container">
                <Link to = '/'>
                    <h1>Task Master</h1>
                </Link>
                
                <nav>

                    <div>

                       { user&& <div>
                            <span>Hi {user.username}</span><button onClick={logout}>Logout</button></div>}
                        {!user && <div><Link to= '/Login'>
                            Login
                            </Link>
                        <Link to= '/SignUp'>
                            SignUp
                            </Link></div>}

                    </div>
                </nav>
            </div>
        </header>
     );
}
 
export default Navbar;