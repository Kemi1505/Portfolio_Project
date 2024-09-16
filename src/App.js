import './App.css';
import Analytics from './Components/Analytics';
import Curate from './Components/Curate';
import Dashboard from './Components/Dashboard';
import LogIn from './Components/LogIn';
import Settings from './Components/Settings';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div  >
      <Router>
        <Routes>          
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/settings" element={<Settings />} /> 
          <Route path="/curate" element={<Curate />} />
          <Route path="/analytics" element={<Analytics />} />            
        </Routes>
      </Router>
    </div>
  );
}

export default App;
