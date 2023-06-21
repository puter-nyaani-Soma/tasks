import { BrowserRouter ,Routes, Route,Navigate}  from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home'
import Navbar from './components/Navbar'
import Login from './pages/Login';
import Signup from './pages/Signup';
function App() {
  const {user} = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path = '/'
          element={user ? <Home />:<Navigate to='/login' />}>
          </Route>
          <Route path='/login'
          element = {!user ? <Login />:<Navigate to='/' />}>
          </Route>
          <Route path='/Signup'
          element = {!user ? <Signup />:<Navigate to='/' />}>
          </Route>

        </Routes>
      </div>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
