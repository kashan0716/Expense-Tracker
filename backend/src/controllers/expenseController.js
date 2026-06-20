const Expense = require("../models/Expense");

const addExpense = async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    await Expense.create({
      title,
      amount,
      category,
      userId: req.userId,
    });

    res.json({
      success: true,
      message: "Expense added",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const getExpenses = async (req, res) => {
  try {
    const expenses = await Expense.find({
      userId: req.userId,
    }).sort({ createdAt: -1 });

    res.json({
      success: true,
      expenses,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const deleteExpense = async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Expense deleted",
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addExpense,
  getExpenses,
  deleteExpense,
};
