const mongoose = require("mongoose"); 

const directDebitSchema = new mongoose.Schema({
  total: {
    type: [String]
  }
})

const directDebit = mongoose.model("Direct Debit", directDebitSchema);
module.exports = directDebit;
