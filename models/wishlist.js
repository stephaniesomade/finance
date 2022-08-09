const mongoose = require("mongoose"); 

const wishSchema = new mongoose.Schema({
  description: {
    type: String,
  },
  name: {
    type: String,
  },
  sites: {
    type: String,
  }, 
  price: {
    type: Number,
  },
  score: {
    type: Number,
  }, 
  comment: {
    type: [{}],
  }
})

const wishlist  = mongoose.model("WishList", wishSchema);
module.exports = wishlist;