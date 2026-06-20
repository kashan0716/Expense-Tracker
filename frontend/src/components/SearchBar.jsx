import { Search } from "lucide-react";

const SearchBar = ({ search, setSearch }) => {
  return (
    <div className="relative w-full">
      {/* Icon */}
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Search expenses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full pl-11 pr-4 py-3 rounded-xl bg-[#111c2e] border border-white/5 text-white placeholder:text-slate-500 outline-none focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition"
      />
    </div>
  );
};

export default SearchBar;
