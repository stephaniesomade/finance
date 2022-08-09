const Expenses = require("../models/expenses");
const DirectDebit = require("../models/directdebit");

const ExpenseController = { 
    January: async (req, res) => { 
      // Gets the page with the Update Expense Report
        res.render("expenses/january")
    }, 
    AddToJanuary: (req, res) => {
      const amount = req.body.Text[0]
      const category = req.body.Text[1]
      const month = req._parsedUrl.href.substring(1)
      let add = new Expenses({month: month, category: category, amount: amount})
      add.save((err) => { 
        if (err) { 
          throw err;
        }
        res.status(201).redirect("/expenses/january"); 
      }) 
    },
    DeleteFromJanuary: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "january", category: category, amount: amount })
      res.status(201).redirect("/month/january");
    },
    February: (req, res) => { 
        res.render("expenses/february")
    },
    AddToFebruary: (req, res) => { 
      // Add to Feb expenses
      const amount = req.body.Text[0]
      const category = req.body.Text[1]
      const month = req._parsedUrl.href.substring(1)
      let add = new Expenses({month: month, category: category, amount: amount})
      add.save((err) => { 
        if (err) { 
          throw err;
        }
        res.status(201).redirect("/expenses/february"); 
      })
    }, 
    DeleteFromFebruary: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "february", category: category, amount: amount })
      res.status(201).redirect("/month/february");
    },
    March: (req, res) => { 
      res.render("expenses/march")
    }, 
    AddToMarch: (req, res) => { 
      const amount = req.body.Text[0]
      const category = req.body.Text[1]
      const month = req._parsedUrl.href.substring(1)
      let add = new Expenses({month: month, category: category, amount: amount})
      add.save((err) => { 
        if (err) { 
          throw err;
        }
        res.status(201).redirect("/expenses/march"); 
      })
    }, 
    DeleteFromMarch: async (req, res) => {
      const amount = req.params.amount
      const category = req.params.category
      await Expenses.findOneAndDelete({ month: "march", category: category, amount: amount })
      res.status(201).redirect("/month/march");
    },
    April: (req, res) => {
      res.render("expenses/april")
    },
    AddToApril: (req, res) => { 
      const amount = req.body.Text[0]
      const category = req.body.Text[1]
      const month = req._parsedUrl.href.substring(1)
      let add = new Expenses({month: month, category: category, amount: amount})
      add.save((err) => { 
        if (err) { 
          throw err;
        }
        res.status(201).redirect("/expenses/april"); 
      })
      }, 
      DeleteFromApril: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "april", category: category, amount: amount })
        res.status(201).redirect("/month/april");
      },  
      May: (req, res) => {
        res.render("expenses/may")
      },
      AddToMay: (req, res) => { 
        console.log("may route")
        const amount = req.body.Text[0]
        const category = req.body.Text[1]
        const month = req._parsedUrl.href.substring(1)
        let add = new Expenses({month: month, category: category, amount: amount})
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/may"); 
        })
      },
      DeleteFromMay: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "may", category: category, amount: amount })
        res.status(201).redirect("/month/may");
      },  
      June: (req, res) => {
        res.render("expenses/june")
      },
      AddToJune: (req, res) => { 
        console.log("june route")
        const amount = req.body.Text[0]
        const category = req.body.Text[1]
        const month = req._parsedUrl.href.substring(1)
        let add = new Expenses({month: month, category: category, amount: amount})
        console.log(amount)
        console.log(category)
        console.log(month)
        console.log("All added!")
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/june"); 
        })
      },
      DeleteFromJune: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "june", category: category, amount: amount })
        res.status(201).redirect("/month/june");
      },  
      July: (req, res) => {
        res.render("expenses/july")
      },
      AddToJuly: (req, res) => { 
        console.log("july route")
        const amount = req.body.Text[0]
        const category = req.body.Text[1]
        const month = req._parsedUrl.href.substring(1)
        let add = new Expenses({month: month, category: category, amount: amount})
        console.log(amount)
        console.log(category)
        console.log(month)
        console.log("All added!")
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/july"); 
        })
      }, 
      DeleteFromJuly: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "july", category: category, amount: amount })
        res.status(201).redirect("/month/july");
      },  
      August: (req, res) => {
        res.render("expenses/august")
      },
      AddToAugust: (req, res) => { 
        const amount = req.body.Text[0]
        const category = req.body.Text[1]
        const month = req._parsedUrl.href.substring(1)
        let add = new Expenses({month: month, category: category, amount: amount})
        console.log(amount)
        console.log(category)
        console.log(month)
        console.log("All added!")
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/august"); 
        })
      },
      DeleteFromAugust: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "august", category: category, amount: amount })
        res.status(201).redirect("/month/august");
      },  
      September: (req, res) => {
        res.render("expenses/september")
      },
      AddToSeptember: (req, res) => { 
        const amount = req.body.Text[0]
        const category = req.body.Text[1]
        const month = req._parsedUrl.href.substring(1)
        let add = new Expenses({month: month, category: category, amount: amount})
        console.log(amount)
        console.log(category)
        console.log(month)
        console.log("All added!")
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/september"); 
        })
      },
      DeleteFromSeptember: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "september", category: category, amount: amount })
        res.status(201).redirect("/month/september");
      },  
      October: (req, res) => {
        res.render("expenses/october")
      },
      AddToOctober: (req, res) => { 
        const amount = req.body.Text[0]
        const category = req.body.Text[1]
        const month = req._parsedUrl.href.substring(1)
        let add = new Expenses({month: month, category: category, amount: amount})
        console.log(amount)
        console.log(category)
        console.log(month)
        console.log("All added!")
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/october"); 
        })
      },
      DeleteFromOctober: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "october", category: category, amount: amount })
        res.status(201).redirect("/month/october");
      },  

      November: (req, res) => {
        res.render("expenses/november")
      },
      AddToNovember: (req, res) => { 
        const amount = req.body.Text[0]
        const category = req.body.Text[1]
        const month = req._parsedUrl.href.substring(1)
        let add = new Expenses({month: month, category: category, amount: amount})
        console.log(amount)
        console.log(category)
        console.log(month)
        console.log("All added!")
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/november"); 
        })
      },
      DeleteFromNovember: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "november", category: category, amount: amount })
        res.status(201).redirect("/month/november");
      },  
      December: (req, res) => {
        res.render("expenses/december")
      },
      AddToDecember: (req, res) => { 
        const amount = req.body.Text[0]
        const category = req.body.Text[1]
        const month = req._parsedUrl.href.substring(1)
        let add = new Expenses({month: month, category: category, amount: amount})
        console.log(amount)
        console.log(category)
        console.log(month)
        console.log("All added!")
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/december"); 
        })
      }, 
      DeleteFromDecember: async (req, res) => {
        const amount = req.params.amount
        const category = req.params.category
        await Expenses.findOneAndDelete({ month: "december", category: category, amount: amount })
        res.status(201).redirect("/month/december");
      },  
      DirectDebit: async (req, res) => { 
        let id = "62ebc7dcc73e84b86364835c"
        const debitSum = await DirectDebit.findOne({_id: id})
        const object = debitSum.total
        console.log(object)
        let sum = 0;
        
        object.forEach(iterateFunction);
        
        function iterateFunction(item) {
          const num = Number(item)
          console.log(num)
          sum += num
        }
        
        Expenses.find({category: "direct debit"}, (err, expenses) => { 
          if (err) { 
            throw err;
          }
          res.render("expenses/directdebit", {expenses: expenses.reverse(), total: sum})
        })
        },
      UpdateDebit: async (req, res) => {
        const amount = req.body.Text[0]
        const purpose = req.body.Text[1]
        const price = parseFloat(amount).toFixed(2)
        let directDebit = new Expenses({month: purpose, category: "direct debit", amount: amount})
        let object = "62ebc7dcc73e84b86364835c"
        let update = await DirectDebit.findOneAndUpdate({_id: object}, { $push: {total : [price]}})
        directDebit.save((err) => { 
          if (err) { 
            throw err;
          }
        res.status(201).redirect("/expenses/directdebit");
        });
      }
}
module.exports = ExpenseController;