import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const login = (token) => {
    localStorage.setItem("token", token);

    setUser({
      authenticated: true,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");

    setUser(null);
  };

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setLoading(false);

        return;
      }

      const response = await api.get("/api/expense/list");

      if (response.data.success) {
        setUser({
          authenticated: true,
        });
      }
    } catch (error) {
      logout();
    }

    setLoading(false);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
