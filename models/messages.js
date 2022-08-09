const mongoose = require("mongoose"); 

const messagesSchema = new mongoose.Schema({
  message: {
    type: String,
  },
  name: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: () => new Date(),
    immutable: true,
  }, 
  likes: {
    type: [String],
  },
  likeCount: { 
    type: Number,
  },
  date: { 
    type: String,
    immutable: true,
  }
})

const messages = mongoose.model("Messages", messagesSchema);
module.exports = messages;
