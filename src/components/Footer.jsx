import React from 'react';
import { useClerk } from '@clerk/clerk-react';

const Footer = () => {
  const { signOut } = useClerk();

  // Function to handle logout
  const handleLogout = async () => {
    try {
      await signOut(); // Sign the user out and clear session cookies
      window.location.href = '/'; // Redirect to the root page after logout
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="flex mt-8 px-5 py-3">
      <button
        className="text-xl sm:text-4xl font-lilita border-2 rounded-xl shadow-lg px-6 py-3 border-red-600 bg-red-500 text-white hover:bg-red-600 hover:border-red-800 transform hover:scale-105 hover:shadow-2xl transition-all duration-300 ease-in-out"
        onClick={handleLogout} // Attach the handleLogout function to the button's onClick event
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Footer;
