import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-[#0b1220] flex items-center justify-center relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_60%)] opacity-40" />

      {/* Content */}
      <div className="relative text-center px-6">
        <h1 className="text-7xl sm:text-8xl font-bold text-white tracking-tight">
          404
        </h1>

        <p className="text-slate-400 mt-3 text-sm sm:text-base">
          Page not found. The page you’re looking for doesn’t exist.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium shadow-md active:scale-[0.98]"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
