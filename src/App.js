import React from 'react';
import './App.css';
import Analytics from './Components/Analytics';
import Calendar from './Components/Calendar';
import Curate from './Components/Curate';
import Dashboard from './Components/Dashboard';
import LogIn from './Components/LogIn';
import Settings from './Components/Settings';
import SignUp from './Components/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TransactionProvider } from './contexts/DashContext';

function App() {
  
  return (
    <TransactionProvider>
    <div  >
      <Router>
        <Routes>    
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard  />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/settings" element={<Settings />} /> 
          <Route path="/curate" element={<Curate />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/calendar" element={<Calendar />} />  
        </Routes>
      </Router>
     
    </div>
    </TransactionProvider>
  );
}

export default App;
