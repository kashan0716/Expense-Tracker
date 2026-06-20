import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import MainLayout from "../layouts/MainLayout";
import ExpenseForm from "../components/ExpenseForm";
import ExpenseList from "../components/ExpenseList";
import EmptyState from "../components/EmptyState";
import SearchBar from "../components/SearchBar";

import api from "../services/api";

const Expenses = () => {
  const [expenses, setExpenses] = useState([]);
  const [search, setSearch] = useState("");

  const fetchExpenses = async () => {
    try {
      const response = await api.get("/api/expense/list");

      if (response.data.success) {
        setExpenses(response.data.expenses);
      }
    } catch (error) {
      toast.error("Cannot load expenses");
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const addExpense = async (data) => {
    try {
      const response = await api.post("/api/expense/add", data);

      if (response.data.success) {
        toast.success("Expense Added");
        fetchExpenses();
      }
    } catch (error) {
      toast.error("Added Failed");
    }
  };

  const deleteExpense = async (id) => {
    try {
      const response = await api.delete(`/api/expense/delete/${id}`);

      if (response.data.success) {
        toast.success("Expense Deleted");
        fetchExpenses();
      }
    } catch (error) {
      toast.error("Delete failed");
    }
  };

  const filtered = expenses.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <MainLayout>
      {/* Page container */}
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-semibold text-white">
            Expenses
          </h1>

          <p className="text-slate-400 text-sm mt-2">
            Add, track, and manage your daily expenses in one place.
          </p>
        </div>

        {/* Search */}
        <div className="w-full">
          <SearchBar search={search} setSearch={setSearch} />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Form */}
          <div className="lg:col-span-1">
            <ExpenseForm addExpense={addExpense} />
          </div>

          {/* List */}
          <div className="lg:col-span-2 space-y-4">
            {filtered.length === 0 ? (
              <EmptyState />
            ) : (
              <ExpenseList expenses={filtered} deleteExpense={deleteExpense} />
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Expenses;
