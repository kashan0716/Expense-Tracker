import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import App from "./App";
import AuthContextProvider from "./context/AuthContext";

import "./index.css";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <App />

        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          pauseOnHover
          draggable
          theme="dark"
          toastStyle={{
            background: "#111c2e",
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.05)",
            borderRadius: "12px",
            padding: "12px",
            fontSize: "14px",
          }}
        />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
