// src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth as useClerkAuth } from '@clerk/clerk-react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { isSignedIn, isLoaded } = useClerkAuth(); // Use isLoaded to know when Clerk is ready
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null to denote loading

  useEffect(() => {
    if (isLoaded) {
      setIsAuthenticated(isSignedIn);
    }
  }, [isSignedIn, isLoaded]);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
