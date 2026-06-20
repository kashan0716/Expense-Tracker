const express = require("express");

const router = express.Router();

const auth = require("../middleware/authMiddleware");

const {
  addExpense,
  getExpenses,
  deleteExpense,
} = require("../controllers/expenseController");

router.post("/add", auth, addExpense);

router.get("/list", auth, getExpenses);

router.delete("/delete/:id", auth, deleteExpense);

module.exports = router;
