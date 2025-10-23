import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
