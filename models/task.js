const mongoose = require("mongoose"); 

const taskSchema = new mongoose.Schema({
  task: {
    type: String
  },
  rating: {
    type: Number
  },
  status: {
    type: String
  },
  completed: { 
    type: String
  }
})

const toDoList = mongoose.model("Todo", taskSchema);
module.exports = toDoList;
