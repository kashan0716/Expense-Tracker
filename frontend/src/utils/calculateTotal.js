const calculateTotal = (expenses = []) => {
  return expenses.reduce((total, item) => {
    const amount = Number(item.amount) || 0;
    return total + amount;
  }, 0);
};

export default calculateTotal;
