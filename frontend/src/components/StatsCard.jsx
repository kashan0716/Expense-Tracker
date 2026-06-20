const StatsCard = ({ title, amount }) => {
  return (
    <div className="group bg-[#111c2e] hover:bg-[#162238] transition-all duration-200 p-6 rounded-2xl border border-white/5 shadow-sm">
      {/* Accent line */}
      <div className="w-10 h-1 bg-indigo-500 rounded-full mb-4 opacity-70 group-hover:opacity-100 transition" />

      {/* Title */}
      <p className="text-slate-400 text-sm">{title}</p>

      {/* Amount */}
      <h2 className="text-2xl sm:text-3xl font-semibold text-white mt-3 tracking-tight">
        ₹{amount}
      </h2>
    </div>
  );
};

export default StatsCard;
