const Loader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1e293b_0%,transparent_60%)] opacity-40" />

      {/* Loader Card */}
      <div className="relative flex flex-col items-center gap-4 p-6 rounded-2xl bg-[#111c2e]/60 border border-white/5 backdrop-blur-md">
        {/* Spinner */}
        <div className="w-10 h-10 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin"></div>

        {/* Optional text */}
        <p className="text-slate-400 text-sm">Loading expenses...</p>
      </div>
    </div>
  );
};

export default Loader;
