import { 
  Routes,
  Route, 
  Navigate
 } from 'react-router-dom';

import './App.css'
import Login from './components/public/Login';
import POSPage from './components/private/POSPage';
import NotFound from './components/shared/NotFound';
import { Authenticate } from './components/shared/Authenticate';
import Signup from './components/public/Signup';

function App() {
  

  return (
      <Routes>
        <Route path= "/" element={<Navigate to = "/pos" />}/>
        <Route>
          <Route path = "/signin" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />} />
          <Route path = "*" element = {<NotFound />} />
        </Route>
        <Route element = {<Authenticate />} >
          <Route path= "/pos" element={<POSPage/>} />
        </Route>
      </Routes>
  )
}

export default App
