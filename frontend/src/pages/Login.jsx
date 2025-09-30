import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/login", { email, password });
      console.log(res.data);
      alert("Login Successful");
      // Redirect to Dashboard here if needed
    } catch (err) {
      console.error(err);
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Login Card */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 relative overflow-hidden">
        {/* Decorative Background Circle */}
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-purple-300 rounded-full opacity-50 mix-blend-multiply"></div>
        <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-pink-300 rounded-full opacity-50 mix-blend-multiply"></div>

        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-8">
          Login to your Glowlogics CRM account
        </p>

        <form onSubmit={handleLogin} className="space-y-5 relative z-10">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500 relative z-10">
          Forgot your password?{" "}
          <span className="text-indigo-600 font-semibold cursor-pointer hover:underline">
            Reset here
          </span>
        </p>
      </div>
    </div>
  );
}
