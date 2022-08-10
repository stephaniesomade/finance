const express = require("express");
const router = express.Router();

const ExpenseController = require("../controllers/expense")

router.get('/directdebit', ExpenseController.DirectDebit)
router.post('/directdebit', ExpenseController.UpdateDebit)
router.get('/january', ExpenseController.January)
router.post('/january', ExpenseController.AddToJanuary)
router.get('/february', ExpenseController.February)
router.post('/february', ExpenseController.AddToFebruary)
router.get('/march', ExpenseController.March)
router.post('/march', ExpenseController.AddToMarch)
router.get('/april', ExpenseController.April)
router.post('/april', ExpenseController.AddToApril)
router.get('/may', ExpenseController.May)
router.post('/may', ExpenseController.AddToMay)
router.get('/june', ExpenseController.June)
router.post('/june', ExpenseController.AddToJune)
router.get('/july', ExpenseController.July)
router.post('/july', ExpenseController.AddToJuly)
router.get('/august', ExpenseController.August)
router.post('/august', ExpenseController.AddToAugust)
router.get('/september', ExpenseController.September)
router.post('/september', ExpenseController.AddToSeptember)
router.get('/october', ExpenseController.October)
router.post('/october', ExpenseController.AddToOctober)
router.get('/november', ExpenseController.November)
router.post('/november', ExpenseController.AddToNovember)
router.get('/december', ExpenseController.December)
router.post('/december', ExpenseController.AddToDecember)
module.exports = router;
