const express = require("express");
const router = express.Router();

const UsersController = require("../controllers/users")

router.get('/profile', UsersController.Index);
router.get('/new', UsersController.New)
router.post('/new', UsersController.Create);
router.get('/availability', UsersController.Availability);
router.post('/comment', UsersController.Comment);
module.exports = router;
