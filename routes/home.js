const express = require("express");
const router = express.Router();

const HomeController = require("../controllers/home")
const TestController = 

router.get('/', HomeController.Index);
router.get('/tasks', HomeController.Tasks);

module.exports = router;
