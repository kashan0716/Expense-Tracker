import { Wallet } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4">
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center mb-4">
        <Wallet className="text-indigo-400" size={26} />
      </div>

      {/* Title */}
      <h2 className="text-xl sm:text-2xl font-semibold text-white">
        No Expenses Found
      </h2>

      {/* Description */}
      <p className="text-slate-400 mt-2 text-sm sm:text-base text-center max-w-md">
        Start tracking your spending by adding your first expense.
      </p>
    </div>
  );
};

export default EmptyState;
