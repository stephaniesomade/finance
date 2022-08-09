// const Users = require("../models/users")
const HomeController = { 
  Index: (req, res) => {
    res.render("home/index")
  }
}
module.exports = HomeController;