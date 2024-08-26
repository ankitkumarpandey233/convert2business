// src/components/PrivateRoute.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // Debugging output to trace authentication state
  console.log('PrivateRoute - isAuthenticated:', isAuthenticated);

  if (isAuthenticated === null) {
    // Loading state while checking authentication
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/auth" />;
};

export default PrivateRoute;
