import { useState } from "react";
import { API } from "../utils/api";
import { Link, useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await API.post("/auth/login", { email, password });
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-purple-200 via-pink-200 to-yellow-100 px-4">
      <form
        onSubmit={handleLogin}
        className="bg-white backdrop-blur-md p-10 rounded-3xl shadow-2xl w-full max-w-md space-y-6 border border-gray-100"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-wide">
          Login
        </h2>

        {error && (
          <p className="text-red-600 text-sm bg-red-100 p-3 rounded-lg shadow-inner">
            {error}
          </p>
        )}

        {/* Email Input */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 ring-blue-400 transition">
          <FaEnvelope className="text-gray-400 mr-3 text-lg" />
          <input
            type="email"
            placeholder="Email"
            className="w-full outline-none text-gray-700 placeholder-gray-400 text-base"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 ring-green-400 transition">
          <FaLock className="text-gray-400 mr-3 text-lg" />
          <input
            type="password"
            placeholder="Password"
            className="w-full outline-none text-gray-700 placeholder-gray-400 text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Login Button */}
        <button className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-2xl shadow-lg transform hover:-translate-y-1 transition-all duration-300">
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 text-sm">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-600 font-semibold hover:underline"
          >
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}
