import { useState } from "react";
import { categories } from "../utils/categories";

const ExpenseForm = ({ addExpense }) => {
  const [data, setData] = useState({
    title: "",
    amount: "",
    category: "Food",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    addExpense(data);

    setData({
      title: "",
      amount: "",
      category: "Food",
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-[#111c2e] border border-white/5 p-6 rounded-2xl space-y-5 shadow-lg"
    >
      {/* Title */}
      <input
        type="text"
        placeholder="Expense title"
        value={data.title}
        onChange={(e) => setData({ ...data, title: e.target.value })}
        className="w-full bg-[#0b1220] border border-white/5 focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition px-4 py-3 rounded-xl text-white placeholder:text-slate-500 outline-none"
      />

      {/* Amount */}
      <input
        type="number"
        placeholder="Amount (₹)"
        value={data.amount}
        onChange={(e) => setData({ ...data, amount: e.target.value })}
        className="w-full bg-[#0b1220] border border-white/5 focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition px-4 py-3 rounded-xl text-white placeholder:text-slate-500 outline-none"
      />

      {/* Category */}
      <select
        value={data.category}
        onChange={(e) => setData({ ...data, category: e.target.value })}
        className="w-full bg-[#0b1220] border border-white/5 focus:border-indigo-500/40 focus:ring-2 focus:ring-indigo-500/10 transition px-4 py-3 rounded-xl text-white outline-none"
      >
        {categories.map((item) => (
          <option key={item.name} value={item.name}>
            {item.name}
          </option>
        ))}
      </select>

      {/* Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 transition text-white font-medium py-3 rounded-xl shadow-md active:scale-[0.99] cursor-pointer"
      >
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
