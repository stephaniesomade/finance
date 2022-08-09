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
  },
  medical: {
    type: String,
  }, 
  wishlist: { 
    type: [String],
  },
  trainers: { 
    type: [String],
  },
  extraDetails: { 
    type: [String],
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;