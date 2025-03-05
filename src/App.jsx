import React from 'react'
import LandingPage from './pages/landingPage/LandingPage'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Userdashboard from './components/userDashboard/Userdashboard';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/userdashboard" element={<Userdashboard/>} />
    </Routes>
  </Router>
  )
}

export default App