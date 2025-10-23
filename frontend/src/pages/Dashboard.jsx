import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import { API } from "../utils/api";

export default function Dashboard() {
  const [expenses, setExpenses] = useState([]);
  const user = JSON.parse(localStorage.getItem("user"));

  const getExpenses = async () => {
    try {
      const { data } = await API.get("/expenses", {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      setExpenses(data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/login";
  };

  useEffect(() => {
    getExpenses();
  }, []);

  return (
    <>
      <Navbar user={user} onLogout={handleLogout} />

      <div className="max-w-6xl mx-auto mt-10 px-4 flex flex-col-reverse lg:flex-col gap-6">
        {/* Expense Form at bottom */}
        <div className="bg-gray-50 p-6 rounded-2xl shadow-xl order-2 lg:order-2">
          <ExpenseForm refresh={getExpenses} />
        </div>

        {/* Expense List at top */}
        <div className="bg-white p-6 rounded-2xl shadow-xl order-1 lg:order-1">
          <ExpenseList data={expenses} refresh={getExpenses} />
        </div>
      </div>
    </>
  );
}

