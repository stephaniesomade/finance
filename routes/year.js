const express = require("express");
const router = express.Router();

const YearController = require("../controllers/year")

router.get('/index', YearController.Index);
router.get('/2022', YearController.Year22);
router.get('/2023', YearController.Year23);

module.exports = router;
