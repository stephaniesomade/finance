const Task = require("../models/task")

const TaskController = { 
  New: (req, res) => { 
    console.log("hey there")
    let input = req.body.input
    let rating = req.body.input[1]
    let number = parseInt(rating)
    let addTask = new Task({ task: input[0], rating: number, status: "upcoming", completed: false })
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
    let findTask = await Task.findOneAndUpdate({ task: task }, { completed: true })
    console.log("The task that has been completed is: " + task )
    res.status(201).redirect("/");
  },
  InComplete: async (req, res) => {
    const task = req.params.task;
    let findTask = await Task.findOneAndUpdate({ task: task}, { completed: false })
    console.log("The task, " + task + " ,has been moved into the outstanding tasks list")
    res.status(201).redirect("/")
  }
}
module.exports = TaskController;