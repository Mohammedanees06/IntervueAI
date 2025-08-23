// src/pages/Login.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../components/Inputs/Input";
import { validateEmail } from "../utils/helper";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
      return; // <- stop here so the error stays
    }
   
    setError(null);
    console.log("Login Success:", email);
    navigate("/dashboard");
  };
  
  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#1e1e2f] flex items-center justify-center px-4">
      <div className="max-w-md w-full p-6 border rounded-lg shadow-md bg-[#2e2e3e] relative">
        <button
          type="button"
          onClick={handleGoBack}
          className="absolute top-4 left-4 text-white hover:text-blue-400 text-2xl font-bold"
          aria-label="Back to home"
        >
          &larr;
        </button>

        <div className="text-center mb-6 mt-8">
          <h3 className="text-2xl font-semibold mb-2 text-white">Welcome Back</h3>
          <p className="text-gray-400">Please enter your details</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className={`w-full bg-blue-600 text-white py-2 rounded transition ${
              !email || !password ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-700"
            }`}
            disabled={!email || !password}
          >
            Login
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400 text-sm">
            Don't have an account?{' '}
            <button
              onClick={() => navigate('/signup')}
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;