const mongoose = require("mongoose"); 

const completedSchema = new mongoose.Schema({
  task: {
    type: String,
  }
})

const completed = mongoose.model("Completed", completedSchema);
module.exports = completed;
