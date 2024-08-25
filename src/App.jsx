// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Business from './pages/Business';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<SignInPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/business" element={<Business/>} />
      </Routes>
    </Router>
  );
};

export default App;
