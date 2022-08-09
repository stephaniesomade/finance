const messages = require("../models/messages");
const Messages = require("../models/messages");

const MessagesController = { 
  Index: (req, res) => {
    Messages.find((err, message) => {
      if (err) { 
        throw err;
      }
      res.render("messages/index", {message: message})
    })
  },
  New: (req, res) => { 
    const message = req.body.message
    let messages = new Messages({message: message, name: req.session.user.name})
    messages.save((err) => { 
      if (err) { 
        throw err;
      }
      res.status(201).redirect("/messages"); 
    }) 
  }
}
module.exports = MessagesController;