const mongoose = require("mongoose"); 

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: { 
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => new Date(),
    immutable: true,
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;