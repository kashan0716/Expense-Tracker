import ExpenseCard from "./ExpenseCard";

const ExpenseList = ({ expenses, deleteExpense }) => {
  return (
    <div className="w-full">
      {/* Grid container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {expenses.map((expense) => (
          <ExpenseCard
            key={expense._id}
            expense={expense}
            deleteExpense={deleteExpense}
          />
        ))}
      </div>
    </div>
  );
};

export default ExpenseList;
