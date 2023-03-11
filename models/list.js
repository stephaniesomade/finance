const mongoose = require("mongoose"); 

const listSchema = new mongoose.Schema({
  task: {
    type: String
  },
  rating: {
    type: Number
  },
  completed: { 
    type: String
  }
})

const toDoList = mongoose.model("Todo", listSchema);
module.exports = toDoList;
