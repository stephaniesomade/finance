// const Users = require("../models/users")
const YearController = { 
  Index: (req, res) => {
    res.render("year/index")
  },
  Year22: (req, res) => { 
    res.render("year/2022")

  },
  Year23: (req, res) => { 
    res.render("year/2023")
  } 
}
module.exports = YearController;