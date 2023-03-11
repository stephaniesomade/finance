const express = require("express");
const router = express.Router();

const ListController = require("../controllers/list")

router.post('/new', ListController.New);
router.post('/:task/complete', ListController.Complete)
router.post('/move/:task', ListController.InComplete)


module.exports = router;
