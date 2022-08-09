const express = require("express");
const router = express.Router();

const MonthController = require("../controllers/month")

router.get('/january', MonthController.January)
router.get('/february', MonthController.February)
router.get('/march', MonthController.March)
router.get('/april', MonthController.April)
router.get('/may', MonthController.May)
router.get('/june', MonthController.June)
router.get('/july', MonthController.July)
router.get('/august', MonthController.August)
router.get('/september', MonthController.September)
router.get('/october', MonthController.October)
router.get('/november', MonthController.November)
router.get('/december', MonthController.December)
module.exports = router;
