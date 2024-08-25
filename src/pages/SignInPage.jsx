// src/pages/SignInPage.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
      <SignIn redirectUrl={'/dashboard'} />
      </div>
    </div>
  );
};

export default SignInPage;
