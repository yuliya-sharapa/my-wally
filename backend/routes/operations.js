const express = require('express');
const router = express.Router();
const operationsController = require("../controllers/operationsController");

router.get('/', operationsController.listAll);

module.exports = router;