const express = require("express");
const router = express.Router();

const TaskController = require("../controllers/task")

router.post('/new', TaskController.New);
router.post('/:task/complete', TaskController.Complete)
router.post('/move/:task', TaskController.InComplete)


module.exports = router;
