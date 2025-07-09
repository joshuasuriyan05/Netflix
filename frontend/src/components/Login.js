import React, { useState } from 'react';
import bgImage from '../assests/netflix-bg.jpg';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://netflix-er.onrender.com/login", {
      "username": email,
      "password": password
    })
    .then((res) => {
      if (res.data === true) {
        navigate("/success");
      } else {
        navigate("/fail");
      }
    })
    .catch((error) => {
      console.error("Login error:", error);
      navigate("/fail");
    });
  };

  return (
    <div className="h-screen w-full bg-cover bg-center relative" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
        <form onSubmit={handleSubmit} className="bg-black bg-opacity-80 text-white px-8 py-10 rounded-md w-full max-w-sm">
          <h1 className="text-3xl font-semibold mb-6">Sign In</h1>

          <input
            type="text"
            placeholder="Email or mobile number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full mb-4 px-4 py-3 bg-gray-800 rounded text-sm placeholder-gray-400"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full mb-4 px-4 py-3 bg-gray-800 rounded text-sm placeholder-gray-400"
          />

          <button type="submit" className="w-full bg-red-600 py-3 rounded text-white font-semibold hover:bg-red-700">
            Sign In
          </button>

          <div className="flex justify-center items-center my-4 text-gray-500">OR</div>

          <button type="button" className="w-full bg-gray-700 py-3 rounded text-white font-semibold hover:bg-gray-600">
            Use a sign-in code
          </button>

          <div className="flex justify-between items-center mt-4 text-sm text-gray-400">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="accent-white" />
              <span>Remember me</span>
            </label>
            <a href="#" className="hover:underline text-white">Forgot password?</a>
          </div>

          <p className="text-sm text-gray-400 mt-6">
            New to Netflix? <a href="#" className="text-white hover:underline">Sign up now.</a>
          </p>

          <p className="text-xs text-gray-500 mt-6">
            This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="#" className="text-blue-500 hover:underline">Learn more.</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
