const Task = require("../models/task");

const BoardController = {
  Index: async (req, res) => {
    const list = await Task.find({ completed: false });
    const completedList = await Task.find({ completed: true });
    const selected = await Task.find({ status: 'selected' })
    res.render("board/index", {
      list: list,
      completedList: completedList,
      selected: selected,
    });
  },
  Select: async (req, res) => {
    console.log("This is a selected task")
    const id = req.params.id
    const findTask = await Task.findOneAndUpdate({ id: id}, { status: "selected"})
    findTask.save((err) => {
      if (err) {
        throw err
      }
    });
    res.status(201).redirect("/board");
  },
};
module.exports = BoardController;
