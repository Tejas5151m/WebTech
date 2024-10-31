import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Signup from './Components/Contacts/Signup';
import Login from './Components/Contacts/Login';
import HomePage from './Components/Contacts/Homepage';
import ProtectedRoute from './Authu/ProtectedRoute';

const App = () => {
  const [userData, setUserData] = useState([]);

  const handleSignup = (newUser) => {
    setUserData([...userData, newUser]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} /> {/* Redirect to signup page */}
        <Route path="/signup" element={<Signup handleSignup={handleSignup} />} /> {/* Pass handleSignup as prop */}
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<ProtectedRoute><HomePage /></ProtectedRoute>} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
