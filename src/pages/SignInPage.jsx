// src/pages/SignInPage.jsx
import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <SignIn redirectUrl={'/dashboard'} />
      {/* </div> */}
    </div>
  );
};

export default SignInPage;
