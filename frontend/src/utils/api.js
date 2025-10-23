import axios from "axios";

export const API = axios.create({
  baseURL: "https://expense-tracker-backend-y3t9.onrender.com/api",
});
