const Task = require("../models/task");

const HomeController = {
  Index: async (req, res) => {
    const list = await Task.find({ completed: false });
    const completedList = await Task.find({ completed: true });
    res.render("home/index", {
      list: list,
      completedList: completedList
    });
  },
  Test: async (req, res) => { 
    res.render("home/modal")
  },
};
module.exports = HomeController;
