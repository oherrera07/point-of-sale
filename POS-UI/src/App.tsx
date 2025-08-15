import { 
  BrowserRouter as Router,
  Routes,
  Route
 } from 'react-router-dom';

import './App.css'
import SignIn from './pages/SignIn';
import POSPage from './pages/POSPage';

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path= "/" element={<SignIn/>}/>
        <Route path= "/pos" element={<POSPage/>}/>
      </Routes>
    </Router>
  )
}

export default App
