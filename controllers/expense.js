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
    UpdateJan: async (req, res) => { 
      const id = req.params.id
      const category = req.body.category
      const amount = req.body.amount
      const payment = await Expenses.findById({_id: id})
      const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
    UpdateFeb: async (req, res) => { 
      const id = req.params.id
      const category = req.body.category
      const amount = req.body.amount
      const payment = await Expenses.findById({_id: id})
      const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
    UpdateMar: async (req, res) => { 
      const id = req.params.id
      const category = req.body.category
      const amount = req.body.amount
      const payment = await Expenses.findById({_id: id})
      const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
      UpdateApr: async (req, res) => { 
        const id = req.params.id
        const category = req.body.category
        const amount = req.body.amount
        const payment = await Expenses.findById({_id: id})
        const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
        UpdateMay: async (req, res) => { 
          const id = req.params.id
          const category = req.body.category
          const amount = req.body.amount
          const payment = await Expenses.findById({_id: id})
          const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
          add.save((err) => { 
            if (err) { 
              throw err;
            }
            res.status(201).redirect("/expenses/june"); 
          })
      },
        UpdateJune: async (req, res) => { 
          const id = req.params.id
          const category = req.body.category
          const amount = req.body.amount
          const payment = await Expenses.findById({_id: id})
          const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
          add.save((err) => { 
            if (err) { 
              throw err;
            }
            res.status(201).redirect("/expenses/july"); 
          })
      }, 
        UpdateJuly: async (req, res) => { 
          const id = req.params.id
          const category = req.body.category
          const amount = req.body.amount
          const payment = await Expenses.findById({_id: id})
          const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
          add.save((err) => { 
            if (err) { 
              throw err;
            }
            res.status(201).redirect("/expenses/august"); 
          })
      },
        UpdateAug: async (req, res) => { 
          const id = req.params.id
          const category = req.body.category
          const amount = req.body.amount
          const payment = await Expenses.findById({_id: id})
          const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/september"); 
        })
      },
      UpdateSept: async (req, res) => { 
        const id = req.params.id
        const category = req.body.category
        const amount = req.body.amount
        const payment = await Expenses.findById({_id: id})
        const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/october"); 
        })
      },
      UpdateOct: async (req, res) => { 
        const id = req.params.id
        const category = req.body.category
        const amount = req.body.amount
        const payment = await Expenses.findById({_id: id})
        const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/november"); 
        })
      },
      UpdateNov: async (req, res) => { 
        const id = req.params.id
        const category = req.body.category
        const amount = req.body.amount
        const payment = await Expenses.findById({_id: id})
        const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
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
        add.save((err) => { 
          if (err) { 
            throw err;
          }
          res.status(201).redirect("/expenses/december"); 
        })
      }, 
      UpdateDec: async (req, res) => { 
        const id = req.params.id
        const category = req.body.category
        const amount = req.body.amount
        const payment = await Expenses.findById({_id: id})
        const update = await Expenses.findOneAndUpdate({_id: id}, {category: category, amount: amount})
        res.status(201).redirect("/month/december"); 
      },
        DirectDebit: async (req, res) => { 
        let id = "62ebc7dcc73e84b86364835c"
        const debitSum = await DirectDebit.findOne({_id: id})
        const object = debitSum.total
        let sum = 0;
        
        object.forEach(iterateFunction);
        
        function iterateFunction(item) {
          const num = Number(item)
          sum += num
        }
        
        Expenses.find({category: "direct debit"}, (err, expenses) => { 
          if (err) { 
            throw err;
          }
          res.render("expenses/directdebit", {expenses: expenses.reverse(), total: sum.toFixed(2)})
        })
        },
        Update: async (req, res) => { 
          // renders the update page with the necessary details
          const id = req.params.id
          let month = req.params.month
          let capsMonth = month.charAt(0).toUpperCase() + month.slice(1);
          const obj = await Expenses.findById({_id: id})
          const category = obj.category
          const amount = obj.amount
          res.render("month/update", {month: capsMonth, monthURL: month, category: category, amount: amount, id: id})
        },
      UpdateDebit: async (req, res) => {
        const amount = req.body.text
        const purpose = req.body.Text
        const price = parseFloat(amount)
        let directDebit = new Expenses({month: purpose, category: "direct debit", amount: price})
        let id = "62ebc7dcc73e84b86364835c"
        let update = await DirectDebit.findOneAndUpdate({_id: id}, { $push: {total : [price]}})
        update.save()
        directDebit.save((err) => { 
          if (err) { 
            throw err;
          }
        res.status(201).redirect("/expenses/directdebit");
        });
      }
}
module.exports = ExpenseController;