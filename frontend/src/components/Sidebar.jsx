import { LayoutDashboard, Wallet, X } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
     ${
       isActive
         ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
         : "text-slate-300 hover:bg-white/5 hover:text-white"
     }`;

  return (
    <>
      {/* Mobile Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:static z-50 w-64 h-full bg-[#0b1220] border-r border-white/5
        transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <h2 className="text-xl font-semibold text-white tracking-tight">
              Expense
            </h2>

            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/5 transition"
              onClick={() => setOpen(false)}
            >
              <X size={18} />
            </button>
          </div>

          {/* Links */}
          <div className="flex flex-col p-4 gap-2 flex-1">
            <NavLink to="/" className={linkClass}>
              <LayoutDashboard size={20} />
              Dashboard
            </NavLink>

            <NavLink to="/expenses" className={linkClass}>
              <Wallet size={20} />
              Expenses
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
