import React from 'react';
import { useNavigate } from 'react-router-dom';
import { seedDemoData, setCurrentUser, getUsers } from '../services/api';

export default function Auth() {
  const navigate = useNavigate();

  const handleDemoLogin = async () => {
    await seedDemoData();
    const users = await getUsers();
    const demoUser = users.find(u => u.email === 'you@demo.test');
    if (demoUser) {
      await setCurrentUser(demoUser);
    }
    navigate('/dashboard');
  };

  const handleOAuthLogin = (provider) => {
    alert(`OAuth login with ${provider} is not implemented yet.`);
    // TODO: Implement OAuth login flow
  };

  return (
    <div className="flex items-center justify-center h-screen bg-indigo-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-indigo-600">SynergySphere Login</h1>
        <button
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition mb-4"
          onClick={handleDemoLogin}
          aria-label="Login as Demo User"
        >
          Login as Demo User
        </button>
        <div className="text-center mb-4">or sign in with</div>
        <div className="flex justify-center space-x-4">
          <button
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
            onClick={() => handleOAuthLogin('Google')}
            aria-label="Sign in with Google"
          >
            Google
          </button>
          <button
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition"
            onClick={() => handleOAuthLogin('GitHub')}
            aria-label="Sign in with GitHub"
          >
            GitHub
          </button>
        </div>
        <div className="mt-6 text-center">
          <button
            className="text-indigo-600 underline hover:text-indigo-800"
            onClick={() => alert('Create account flow not implemented yet')}
            aria-label="Create a new account"
          >
            Create a new account
          </button>
        </div>
      </div>
    </div>
  );
}
