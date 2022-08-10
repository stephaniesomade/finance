const Expenses = require("../models/expenses");
const DirectDebit = require("../models/directdebit");

const DeleteController = { 
  DeleteFromJanuary: async (req, res) => {
    const amount = req.params.amount
    const category = req.params.category
    await Expenses.findOneAndDelete({ month: "january", category: category, amount: amount })
    res.status(201).redirect("/month/january");
  },
  DeleteFromFebruary: async (req, res) => {
    const amount = req.params.amount
    const category = req.params.category
    await Expenses.findOneAndDelete({ month: "february", category: category, amount: amount })
    res.status(201).redirect("/month/february");
  },
  DeleteFromMarch: async (req, res) => {
    const amount = req.params.amount
    const category = req.params.category
    await Expenses.findOneAndDelete({ month: "march", category: category, amount: amount })
    res.status(201).redirect("/month/march");
  },
    DeleteFromApril: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "april", category: category, amount: amount })
      res.status(201).redirect("/month/april");
    },  
    DeleteFromMay: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "may", category: category, amount: amount })
      res.status(201).redirect("/month/may");
    }, 
    DeleteFromJune: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "june", category: category, amount: amount })
      res.status(201).redirect("/month/june");
    },  
    DeleteFromJuly: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "july", category: category, amount: amount })
      res.status(201).redirect("/month/july");
    },  
    DeleteFromAugust: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "august", category: category, amount: amount })
      res.status(201).redirect("/month/august");
    },  
    DeleteFromSeptember: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "september", category: category, amount: amount })
      res.status(201).redirect("/month/september");
    },  
    DeleteFromOctober: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "october", category: category, amount: amount })
      res.status(201).redirect("/month/october");
    },  
    DeleteFromNovember: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "november", category: category, amount: amount })
      res.status(201).redirect("/month/november");
    }, 
    DeleteFromDecember: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "december", category: category, amount: amount })
      res.status(201).redirect("/month/december");
    }
}
module.exports = DeleteController;