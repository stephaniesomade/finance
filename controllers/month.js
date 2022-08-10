const Expenses = require("../models/expenses");
const DirectDebit = require("../models/directdebit");
const User = require("../models/users");

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
    // Find all expenses and add them up 
    const totalPayment = await Expenses.find({month: "january"})
    let total = sum
    totalPayment.forEach(iteratePayments);

    function iteratePayments(object) {
      const amount = object.amount
      total += amount
    }
    // for the list of expenses
    Expenses.find({month: "january"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/january", {expenses: expenses.reverse(), total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "february"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "february"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/february", {expenses: expenses.reverse(), total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "march"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "march"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/march", {expenses: expenses.reverse(), total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "april"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "april"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/april", {expenses: expenses.reverse(), total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "may"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "may"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/may", {expenses: expenses.reverse(), total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "june"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "june"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/june", {expenses: expenses.reverse(), total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "july"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "july"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/july", {expenses: expenses.reverse(),  total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "august"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }
      Expenses.find({month: "august"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/august", {expenses: expenses.reverse(), total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "september"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "september"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/september", {expenses: expenses.reverse(),  total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "october"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "october"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/october", {expenses: expenses.reverse(),  total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "november"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "november"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/november", {expenses: expenses.reverse(),  total: sum.toFixed(2), spent: total.toFixed(2)})
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
      const totalPayment = await Expenses.find({month: "december"})
      let total = sum
      totalPayment.forEach(iteratePayments);
  
      function iteratePayments(object) {
        const amount = object.amount
        total += amount
      }  
      Expenses.find({month: "december"}, (err, expenses) => { 
      if (err) { 
        throw err;
      }
      res.render("month/december", {expenses: expenses.reverse(),  total: sum.toFixed(2), spent: total.toFixed(2)})
    })
   }
}
module.exports = MonthController;