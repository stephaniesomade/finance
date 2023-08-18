const List = require("../models/list")

const TaskController = { 
  New: (req, res) => { 
    let input = req.body.input
    let rating = req.body.input[1]
    let number = parseInt(rating)
    console.log(input[0])
    let addTask = new List({ task: input[0], rating: number, completed: false })
    addTask.save((err) => {
      if (err) {
        throw err
      }
      console.log("The task that has been added is: " + input)
    res.status(201).redirect("/"); 
    })
  },
  Complete: async (req, res) => { 
    const task = req.params.task;
    let findTask = await List.findOneAndUpdate({ task: task }, { completed: true })
    console.log("The task that has been completed is: " + task )
    res.status(201).redirect("/");
  },
  InComplete: async (req, res) => {
    const task = req.params.task;
    let findTask = await List.findOneAndUpdate({ task: task}, { completed: false })
    console.log("The task, " + task + " ,has been moved into the outstanding tasks list")
    res.status(201).redirect("/")
  }
}
module.exports = TaskController;