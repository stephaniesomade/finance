const express = require("express");
const router = express.Router();

const BoardController = require("../controllers/board")

router.get('/', BoardController.Index);
router.post('/select/:id', BoardController.Select);

module.exports = router;
