const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    amount: { type: Number, required: true },
    category: { type: String }, // <--- add this line
  },
  { timestamps: true }
);

module.exports = mongoose.model("Expense", expenseSchema);
