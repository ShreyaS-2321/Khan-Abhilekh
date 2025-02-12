import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../assets/login.png";
import { account } from "../../appwrite";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email.trim() || !password.trim()) {
      setError("Email and password are required!");
      return;
    }

    try {
      // User login
      await account.createEmailPasswordSession(email, password);
      
      // Get user details
      const user = await account.get();
      console.log("User details:", user);
      
      setSuccess("Login successful!");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        
        const role=user.labels[0]
        // Role-based navigation
        if (user.labels.includes("admin")) {
          navigate("/home");
        } else if(user.labels.includes("supervisor")) {
          navigate("/home");
        }
        else{
          navigate("/home")
        }
      }, 1000);
    } catch (loginError) {
      console.error("Login Error:", loginError);
      setError(loginError.message || "An error occurred while logging in. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex w-full bg-gray-50 items-center justify-center">
      <div className="bg-white p-8 rounded-[8px] shadow-lg w-[60%] flex space-x-10">
        <div>
          <img src={loginImage} alt="Login" />
        </div>
        <div className="w-[50%] mt-16">
          <h2 className="text-3xl font-bold text-center font-montserrat">LOGIN</h2>

          {error && <p className="text-red-500">{error}</p>}
          {success && <p className="text-green-500">{success}</p>}

          <form onSubmit={handleLogin} className="mt-4 space-y-4">
            <div>
              <label className="block text-gray-600 font-inter mb-2">Email</label>
              <input type="email" placeholder="forexample@gmail.com" value={email} 
                onChange={(e) => setEmail(e.target.value)} required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-black" />
            </div>
            <div>
              <label className="block text-gray-600 font-inter mb-2">Password</label>
              <input type="password" placeholder="Enter your password" value={password} 
                onChange={(e) => setPassword(e.target.value)} required
                className="w-full px-4 py-2 border rounded focus:outline-none focus:ring focus:ring-black mb-4" />
            </div>
            <button type="submit" className="w-full bg-black text-white py-2 rounded">Continue</button>
            
            {showPopup && (
              <div className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white text-green-800 px-6 py-3 rounded-lg shadow-lg">
                Login Successful!
              </div>
            )}
          </form>

          <p className="text-center text-gray-500 mt-4">
            Don't have an account? <Link to="/Signup" className="text-blue-500">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
