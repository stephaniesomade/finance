const mongoose = require("mongoose"); 

const expenseSchema = new mongoose.Schema({
  month: {
    type: String
  }, 
  category: {
    type: String,
  },
  amount: {
    type: Number,
  },
  personID: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => new Date(),
    immutable: true,
  }
})

const Expenses = mongoose.model("Expenses", expenseSchema);
module.exports = Expenses;
