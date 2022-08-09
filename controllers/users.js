const User = require("../models/users")

const UsersController = { 
  New: (req, res) => { 
    res.render("users/new")
  },
  Create: (req, res) => { 
    const user = new User(req.body);
    user.save((err) => {
      if (err) {
        throw err;
      }
    res.redirect("/sessions/new"); 
    });
  },
  Index: (req, res) => {
    const object = req.session.user
    res.render("users/profile", {name: object.name, email: object.email, wishlist: object.wishlist, trainers: object.trainers, createdAt: object.createdAt})
  },
  Availability: (req, res) => {
    console.log(req.body)
    console.log(req.params)
    res.render("users/availability")
  },
  Comment: (req,res) => { 
    console.log(req.body)
    console.log(req.params)
    res.status(201).redirect("/users/availability");
  }
}
module.exports = UsersController;