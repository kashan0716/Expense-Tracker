import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaPiggyBank } from "react-icons/fa";

export default function Navbar({ user, onLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <FaPiggyBank className="text-3xl" />
        <h1 className="text-2xl font-bold tracking-wide">Expense Tracker</h1>
      </div>

      {/* User Section */}
      {user && (
        <div className="relative">
          <div
            className="bg-white text-blue-600 font-bold px-4 py-2 rounded-full cursor-pointer flex items-center gap-2 shadow-md hover:shadow-lg transition"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center">
              {user.name[0].toUpperCase()}
            </span>
            <span className="font-semibold">{user.name}</span>
            <FaChevronDown
              className={`transition-transform ${
                dropdownOpen ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white text-blue-600 rounded-xl shadow-lg overflow-hidden z-50">
              <button
                onClick={onLogout}
                className="w-full text-left px-4 py-2 hover:bg-gray-100 transition font-semibold"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}
