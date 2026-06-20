import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const MainLayout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-[#0b1220] text-gray-100 overflow-hidden">
      {/* Sidebar */}
      <Sidebar open={open} setOpen={setOpen} />

      {/* Main Section */}
      <div className="flex flex-col flex-1">
        {/* Navbar */}
        <div className="h-16 flex-shrink-0 border-b border-white/5 bg-[#0b1220]/80 backdrop-blur-xl z-30">
          <Navbar setOpen={setOpen} />
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
