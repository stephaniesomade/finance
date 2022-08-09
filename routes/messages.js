const express = require("express");
const router = express.Router();

const MessagesController = require("../controllers/messages")

router.get('/', MessagesController.Index);
router.post('/new', MessagesController.New);

module.exports = router;
