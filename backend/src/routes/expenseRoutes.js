const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const Expense = require("../models/Expense");

// @route   GET /api/expenses
// @desc    Get all expenses for logged-in user
// @access  Private
router.get("/", auth, async (req, res) => {
  try {
    const expenses = await Expense.find({ user: req.user.id }).sort({
      createdAt: -1,
    });
    res.json(expenses);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST /api/expenses
// @desc    Add a new expense
// @access  Private
router.post("/", auth, async (req, res) => {
  try {
    const { title, amount, category } = req.body;
    if (!title || !amount) {
      return res.status(400).json({ message: "Title and amount are required" });
    }

    const newExpense = new Expense({
      title,
      amount,
      category, // category is optional
      user: req.user.id,
    });

    const expense = await newExpense.save();
    res.status(201).json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   PUT /api/expenses/:id
// @desc    Update an expense
// @access  Private
router.put("/:id", auth, async (req, res) => {
  try {
    const { title, amount, category } = req.body;

    const expense = await Expense.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { title, amount, category },
      { new: true }
    );

    if (!expense) return res.status(404).json({ message: "Expense not found" });

    res.json(expense);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE /api/expenses/:id
// @desc    Delete an expense
// @access  Private
router.delete("/:id", auth, async (req, res) => {
  try {
    const expense = await Expense.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });

    if (!expense) return res.status(404).json({ message: "Expense not found" });

    res.json({ message: "Expense deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
