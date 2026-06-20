import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Expenses from "./pages/Expenses";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Routes>
        {/* Public Routes */}

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route path="/dashboard" element={<Navigate to="/" />} />

        <Route
          path="/expenses"
          element={
            <ProtectedRoute>
              <Expenses />
            </ProtectedRoute>
          }
        />

        {/* Not Found */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
