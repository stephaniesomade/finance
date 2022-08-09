const Month = require("../models/expenses")
const Expenses = require("../models/expenses");
const DirectDebit = require("../models/directdebit")

const MonthController = { 
  January: async (req, res) => {
    let id = "62ebc7dcc73e84b86364835c"
    const debitSum = await DirectDebit.findOne({_id: id})
    const object = debitSum.total
    let sum = 0;
    
    object.forEach(iterateFunction);
    
    function iterateFunction(item) {
      const num = Number(item)
      sum += num
    }
    Expenses.find({month: "january"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/january", {expenses: expenses.reverse(), total: sum})
    })
    },
    February: async (req, res) => {    
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "february"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/february", {expenses: expenses.reverse(), total: sum})
    })
    },
    March: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "march"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/march", {expenses: expenses.reverse(), total: sum})
    })
    },
    April: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "april"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/april", {expenses: expenses.reverse(), total: sum})
    })
    },
    May: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "may"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/may", {expenses: expenses.reverse(), total: sum})
    })
    },
    June: async (req, res) => {      
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "june"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/june", {expenses: expenses.reverse(), total: sum})
    })
    },
    July: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "july"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/july", {expenses: expenses.reverse(), total: sum})
    })
      },
    August: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "august"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/august", {expenses: expenses.reverse(), total: sum})
    })
    },
    September: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "september"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/september", {expenses: expenses.reverse(), total: sum})
    })
    },
    October: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "october"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/october", {expenses: expenses.reverse(), total: sum})
    })
    },
    November: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "november"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/november", {expenses: expenses.reverse(), total: sum})
    })
    },
    December: async (req, res) => {
      let id = "62ebc7dcc73e84b86364835c"
      const debitSum = await DirectDebit.findOne({_id: id})
      const object = debitSum.total
      let sum = 0;
      
      object.forEach(iterateFunction);
      
      function iterateFunction(item) {
        const num = Number(item)
        sum += num
      }
      Expenses.find({month: "december"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/december", {expenses: expenses.reverse(), total: sum})
    })
   }
}
module.exports = MonthController;