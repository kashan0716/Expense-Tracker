import { Menu, LogOut, Wallet } from "lucide-react";
import useAuth from "../hooks/useAuth";

const Navbar = ({ setOpen }) => {
  const { logout } = useAuth();

  return (
    <div className="h-16 flex items-center justify-between px-4 sm:px-6 bg-[#0b1220]/80 backdrop-blur-xl">
      {/* Left */}
      <div className="flex items-center gap-4">
        {/* Mobile Menu */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
          onClick={() => setOpen((prev) => !prev)}
        >
          <Menu size={20} />
        </button>

        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-indigo-500/10">
            <Wallet size={22} className="text-indigo-400" />
          </div>

          <h1 className="font-semibold text-lg sm:text-xl text-white tracking-tight">
            Expense Tracker
          </h1>
        </div>
      </div>

      {/* Right */}
      <button
        onClick={logout}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-red-500/10 text-slate-300 hover:text-red-400 transition border border-white/5 cursor-pointer"
      >
        <LogOut size={18} />
        <span className="hidden sm:inline">Logout</span>
      </button>
    </div>
  );
};

export default Navbar;
