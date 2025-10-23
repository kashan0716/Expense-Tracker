import { useState } from "react";
import { API } from "../utils/api";
import { FaPlus } from "react-icons/fa";

export default function ExpenseForm({ refresh }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  const categories = ["Food", "Travel", "Bills", "Shopping", "Other"];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    try {
      await API.post(
        "/expenses",
        { title, amount, category },
        { headers: { Authorization: `Bearer ${user.token}` } }
      );

      setTitle("");
      setAmount("");
      setCategory("");

      refresh();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-lg mb-6 flex flex-col sm:flex-row gap-4 items-center"
    >
      <input
        type="text"
        placeholder="Expense Title"
        className="border p-3 rounded-xl flex-1 outline-none focus:ring-2 focus:ring-blue-400 transition"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        className="border p-3 rounded-xl w-32 outline-none focus:ring-2 focus:ring-green-400 transition"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select
        className="border p-3 rounded-xl w-40 outline-none focus:ring-2 focus:ring-purple-400 transition"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl shadow-md flex items-center gap-2 font-semibold transition">
        <FaPlus /> Add
      </button>
    </form>
  );
}
