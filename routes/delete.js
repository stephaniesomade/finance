const express = require("express");
const router = express.Router();

const DeleteController = require("../controllers/delete")

router.post('/january/:category/:amount', DeleteController.DeleteFromJanuary)
router.post('/february/:category/:amount', DeleteController.DeleteFromFebruary)
router.post('/march/:category/:amount', DeleteController.DeleteFromMarch)
router.post('/april/:category/:amount', DeleteController.DeleteFromApril)
router.post('/may/:category/:amount', DeleteController.DeleteFromMay)
router.post('/june/:category/:amount', DeleteController.DeleteFromJune)
router.post('/july/:category/:amount', DeleteController.DeleteFromJuly)
router.post('/august/:category/:amount', DeleteController.DeleteFromAugust)
router.post('/september/:category/:amount', DeleteController.DeleteFromSeptember)
router.post('/october/:category/:amount', DeleteController.DeleteFromOctober)
router.post('/november/:category/:amount', DeleteController.DeleteFromNovember)
router.post('/december/:category/:amount', DeleteController.DeleteFromDecember)
module.exports = router;
