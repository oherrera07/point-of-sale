import { 
  Routes,
  Route, 
  Navigate
 } from 'react-router-dom';

import './App.css'
import SignIn from './components/public/SignIn';
import POSPage from './components/private/POSPage';
import NotFound from './components/shared/NotFound';
import { Authenticate } from './components/shared/Authenticate';

function App() {
  

  return (
      <Routes>
        <Route path= "/" element={<Navigate to = "/pos" />}/>
        <Route>
          <Route path = "/signin" element = {<SignIn />} />
          <Route path = "*" element = {<NotFound />} />
        </Route>
        <Route element = {<Authenticate />} >
          <Route path= "/pos" element={<POSPage/>} />
        </Route>
      </Routes>
  )
}

export default App
