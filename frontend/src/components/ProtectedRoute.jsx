import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "./Loader";

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // Show loader while checking auth state
  if (loading) {
    return <Loader />;
  }

  // Redirect unauthenticated users to login
  if (!user) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  // Render protected content
  return children;
};

export default ProtectedRoute;
