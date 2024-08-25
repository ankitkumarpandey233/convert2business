import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useAuth();

  // Log to see the state
  console.log('PrivateRoute - isAuthenticated:', isAuthenticated);

  if (isAuthenticated === undefined) {
    // Show loading or fallback UI while checking authentication
    return <div>Loading...</div>;
  }

  return isAuthenticated ? element : <Navigate to="/auth" />;
};

export default PrivateRoute;
