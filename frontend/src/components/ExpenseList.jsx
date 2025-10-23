import { useState } from "react";
import { API } from "../utils/api";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function ExpenseList({ data, refresh }) {
  const user = JSON.parse(localStorage.getItem("user"));
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [customRange, setCustomRange] = useState({ start: "", end: "" });
  const [editExpense, setEditExpense] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editAmount, setEditAmount] = useState("");
  const [editCategory, setEditCategory] = useState("");

  const today = new Date();
  const categories = ["Food", "Travel", "Bills", "Shopping", "Other"];

  const handleDelete = async (id) => {
    try {
      await API.delete(`/expenses/${id}`, {
        headers: { Authorization: `Bearer ${user.token}` },
      });
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (exp) => {
    setEditExpense(exp);
    setEditTitle(exp.title);
    setEditAmount(exp.amount);
    setEditCategory(exp.category || "");
  };

  const submitEdit = async () => {
    try {
      await API.put(
        `/expenses/${editExpense._id}`,
        { title: editTitle, amount: editAmount, category: editCategory },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );
      setEditExpense(null);
      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredExpenses = data
    .filter((exp) => exp.title.toLowerCase().includes(search.toLowerCase()))
    .filter((exp) => {
      const expDate = new Date(exp.createdAt);
      if (filter === "daily") {
        return (
          expDate.getDate() === today.getDate() &&
          expDate.getMonth() === today.getMonth() &&
          expDate.getFullYear() === today.getFullYear()
        );
      }
      if (filter === "monthly") {
        return (
          expDate.getMonth() === today.getMonth() &&
          expDate.getFullYear() === today.getFullYear()
        );
      }
      if (filter === "custom") {
        if (!customRange.start || !customRange.end) return true;
        const start = new Date(customRange.start);
        const end = new Date(customRange.end);
        end.setHours(23, 59, 59, 999);
        return expDate >= start && expDate <= end;
      }
      return true;
    })
    .filter((exp) => {
      if (filter === "custom") return true;
      if (!categoryFilter) return true;
      return exp.category === categoryFilter;
    });

  const totalAmount = filteredExpenses.reduce(
    (sum, exp) => sum + exp.amount,
    0
  );

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h2 className="text-xl font-bold mb-4 flex justify-between items-center">
        Expenses{" "}
        <span className="text-blue-600 font-semibold">
          Total: ₹{totalAmount}
        </span>
      </h2>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-5 flex-wrap">
        <input
          type="text"
          placeholder="Search..."
          className="border p-3 rounded-xl flex-1 outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-green-400 transition"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All</option>
          <option value="daily">Today</option>
          <option value="monthly">This Month</option>
          <option value="custom">Custom</option>
        </select>

        {filter === "custom" && (
          <>
            <input
              type="date"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={customRange.start}
              onChange={(e) =>
                setCustomRange({ ...customRange, start: e.target.value })
              }
            />
            <input
              type="date"
              className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={customRange.end}
              onChange={(e) =>
                setCustomRange({ ...customRange, end: e.target.value })
              }
            />
          </>
        )}

        {filter !== "custom" && (
          <select
            className="border p-3 rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        )}
      </div>

      {/* Expense Items */}
      {filteredExpenses.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No expenses found.</p>
      ) : (
        filteredExpenses.map((exp) => (
          <div
            key={exp._id}
            className="flex justify-between items-center border-b py-3 last:border-b-0"
          >
            <div className="flex items-center gap-3">
              <span className="font-semibold">{exp.title}</span>
              {exp.category && (
                <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-sm">
                  {exp.category}
                </span>
              )}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 font-semibold">₹{exp.amount}</span>
              <button
                onClick={() => handleEdit(exp)}
                className="text-green-600 hover:text-green-800"
              >
                <FaEdit />
              </button>
              <button
                onClick={() => handleDelete(exp._id)}
                className="text-red-600 hover:text-red-800"
              >
                <FaTrash />
              </button>
            </div>
          </div>
        ))
      )}

      {/* Edit Modal */}
      {editExpense && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl w-80 space-y-4">
            <h3 className="text-lg font-bold text-gray-800">Edit Expense</h3>
            <input
              type="text"
              className="border p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
            />
            <input
              type="number"
              className="border p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-green-400 transition"
              value={editAmount}
              onChange={(e) => setEditAmount(e.target.value)}
            />
            <select
              className="border p-3 w-full rounded-xl outline-none focus:ring-2 focus:ring-purple-400 transition"
              value={editCategory}
              onChange={(e) => setEditCategory(e.target.value)}
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditExpense(null)}
                className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300 transition"
              >
                Cancel
              </button>
              <button
                onClick={submitEdit}
                className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl shadow-md hover:from-purple-600 hover:to-pink-600 transition flex items-center gap-2"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
