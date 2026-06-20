import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Wallet } from "lucide-react";
import { toast } from "react-toastify";

import api from "../services/api";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!data.email || !data.password) {
      return toast.error("Fill all fields");
    }

    try {
      const response = await api.post("/api/auth/login", data);

      if (response.data.success) {
        login(response.data.token);
        toast.success("Login successfully");
        navigate("/");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1220] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_60%)] opacity-40" />

      {/* Card */}
      <div className="relative w-full max-w-md bg-[#111c2e]/80 backdrop-blur-xl rounded-2xl p-8 border border-white/5 shadow-2xl">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-8">
          <div className="p-3 rounded-2xl bg-indigo-500/10 mb-3">
            <Wallet size={32} className="text-indigo-400" />
          </div>

          <h1 className="text-2xl font-semibold text-white">Expense Tracker</h1>

          <p className="text-slate-400 text-sm mt-1">Sign in to continue</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div className="relative">
            <Mail
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setData({ ...data, email: e.target.value })}
              className="w-full bg-[#0b1220] border border-white/5 focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition pl-11 pr-4 py-3 rounded-xl text-white placeholder:text-slate-500 outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="password"
              placeholder="Password"
              value={data.password}
              onChange={(e) => setData({ ...data, password: e.target.value })}
              className="w-full bg-[#0b1220] border border-white/5 focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition pl-11 pr-4 py-3 rounded-xl text-white placeholder:text-slate-500 outline-none"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium py-3 rounded-xl shadow-md active:scale-[0.99] cursor-pointer">
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center mt-6 text-slate-400 text-sm">
          No account?
          <Link
            to="/signup"
            className="text-indigo-400 hover:text-indigo-300 ml-2 transition"
          >
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
