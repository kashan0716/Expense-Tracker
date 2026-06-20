import { Trash2 } from "lucide-react";
import formatDate from "../utils/formatDate";
import { categories } from "../utils/categories";

const ExpenseCard = ({ expense, deleteExpense }) => {
  const categoryData = categories.find((c) => c.name === expense.category);

  const Icon = categoryData?.icon;

  return (
    <div className="group bg-[#111c2e] hover:bg-[#162238] transition-all duration-200 p-5 rounded-2xl border border-white/5 flex items-center justify-between">
      {/* Left */}
      <div className="flex items-start gap-3">
        {/* Icon */}
        <div className={`p-2 rounded-xl ${categoryData?.bg}`}>
          {Icon && <Icon size={18} style={{ color: categoryData?.color }} />}
        </div>

        {/* Text */}
        <div className="space-y-1">
          <h3 className="font-semibold text-white text-base">
            {expense.title}
          </h3>

          {/* Category pill */}
          <span className="inline-block text-xs px-3 py-1 rounded-full bg-white/5 text-slate-300">
            {expense.category}
          </span>

          <p className="text-xs text-slate-400">{formatDate(expense.date)}</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col items-end gap-3">
        <h2 className="font-semibold text-white text-lg tracking-tight">
          ₹{Number(expense.amount).toLocaleString("en-IN")}
        </h2>

        <button
          onClick={() => deleteExpense(expense._id)}
          className="p-2 rounded-lg hover:bg-red-500/10 transition"
        >
          <Trash2
            className="text-red-400 group-hover:text-red-500 cursor-pointer"
            size={18}
          />
        </button>
      </div>
    </div>
  );
};

export default ExpenseCard;
